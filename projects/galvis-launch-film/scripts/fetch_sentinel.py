"""Download true-colour Sentinel-2 L2A crops for the film and record their licence.

Usage: python3 scripts/fetch_sentinel.py
Requires: pip install pystac-client rasterio shapely
"""
import json
from pathlib import Path

import numpy as np
import rasterio
from PIL import Image
from pystac_client import Client
from rasterio.warp import transform_bounds
from rasterio.windows import from_bounds
from shapely.geometry import box, shape

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / 'assets'
LEDGER = ASSETS / 'LICENSES.json'
STAC = 'https://earth-search.aws.element84.com/v1'
SITES = {
    'riau-plantation': [101.30, 0.30, 101.50, 0.50],
    'morowali-mining': [122.10, -2.90, 122.25, -2.75],
}


def cloud_fraction(img):
    """Share of near-white pixels in the crop: a local cloud estimate."""
    a = np.asarray(img).astype('int16')
    return float(((a.min(axis=2) > 200)).mean())


def candidates(catalog, bbox, limit=12):
    search = catalog.search(
        collections=['sentinel-2-l2a'], bbox=bbox,
        datetime='2025-06-01/2026-09-30', query={'eo:cloud_cover': {'lt': 40}}, max_items=100,
    )
    items = [i for i in search.items() if shape(i.geometry).contains(box(*bbox))]
    if not items:
        raise SystemExit(f'no scene under 40% cloud fully covering {bbox}')
    return sorted(items, key=lambda i: i.properties['eo:cloud_cover'])[:limit]


def crop(item, bbox, width=1920):
    href = item.assets['visual'].href
    with rasterio.open(href) as src:
        b = transform_bounds('EPSG:4326', src.crs, *bbox)
        window = from_bounds(*b, transform=src.transform)
        h = round(width * window.height / window.width)
        data = src.read(window=window, out_shape=(3, h, width), boundless=True, fill_value=0)
    return Image.fromarray(np.moveaxis(data, 0, -1).astype('uint8'))


def main():
    catalog = Client.open(STAC)
    ledger = json.loads(LEDGER.read_text())
    for name, bbox in SITES.items():
        scored = [(cloud_fraction(img), item, img) for item in candidates(catalog, bbox)
                  for img in [crop(item, bbox)]]
        _, item, img = min(scored, key=lambda t: t[0])
        dest = ASSETS / 'sentinel' / f'{name}.jpg'
        dest.parent.mkdir(parents=True, exist_ok=True)
        img.save(dest, 'JPEG', quality=92, optimize=True)
        year = item.datetime.year
        ledger[f'sentinel/{name}.jpg'] = {
            'source': f'{STAC}/collections/sentinel-2-l2a/items/{item.id}',
            'license': 'Copernicus Sentinel data terms (free, attribution)',
            'attribution': f'Contains modified Copernicus Sentinel data {year}',
        }
        print(name, item.id, f'local cloud {min(t[0] for t in scored):.3f}')
    LEDGER.write_text(json.dumps(dict(sorted(ledger.items())), indent=2) + '\n')


if __name__ == '__main__':
    main()
