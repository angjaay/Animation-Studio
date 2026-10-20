"""Collect internal and public-domain assets into assets/ and record their licences.

Usage: python3 scripts/collect_assets.py [--movee PATH] [--website PATH]
"""
import argparse, io, json, shutil, urllib.request
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / 'assets'
LEDGER = ASSETS / 'LICENSES.json'
INTERNAL = {'source': None, 'license': 'internal (GISACT)', 'attribution': None}
NASA = 'public domain (NASA Visible Earth)'
OFL = 'SIL Open Font License 1.1'


def ledger():
    return json.loads(LEDGER.read_text()) if LEDGER.exists() else {}


def record(entries, rel, source, license, attribution=None):
    entries[rel] = {'source': source, 'license': license, 'attribution': attribution}


def save_jpeg(img, dest, width, quality=90):
    img = img.convert('RGB')
    if img.width > width:
        img = img.resize((width, round(img.height * width / img.width)), Image.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    img.save(dest, 'JPEG', quality=quality, optimize=True)


def download(url):
    with urllib.request.urlopen(url, timeout=300) as r:
        if r.status != 200:
            raise SystemExit(f'{url}: HTTP {r.status}')
        return r.read()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--movee', default='/home/user/movee-fe')
    ap.add_argument('--website', default='/home/user/gisact-website')
    a = ap.parse_args()
    movee, website = Path(a.movee), Path(a.website)
    entries = ledger()

    # Dawn earth: the landing hero image (bright dawn horizon).
    dawn = ASSETS / 'earth/dawn.png'
    dawn.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(movee / 'public/assets/e27de72b696ea9d4c6b8379b613c7da3854b7c43.png', dawn)
    record(entries, 'earth/dawn.png', 'N0iire/movee-fe public/assets/e27de72b696ea9d4c6b8379b613c7da3854b7c43.png', INTERNAL['license'])

    for rel, url in {
        'earth/blue-marble.jpg': 'https://eoimages.gsfc.nasa.gov/images/imagerecords/74000/74092/world.200407.3x5400x2700.jpg',
        'earth/black-marble.jpg': 'https://eoimages.gsfc.nasa.gov/images/imagerecords/144000/144898/BlackMarble_2016_3km.jpg',
    }.items():
        save_jpeg(Image.open(io.BytesIO(download(url))), ASSETS / rel, 5400, quality=88)
        record(entries, rel, url, NASA, 'NASA Earth Observatory')

    for name in ('galvis-main.svg', 'galvis-full.svg', 'galvis-wordmark-dark.svg'):
        dest = ASSETS / 'logo' / name
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(movee / 'public/logo' / name, dest)
        record(entries, f'logo/{name}', f'N0iire/movee-fe public/logo/{name}', INTERNAL['license'])

    for src in sorted((website / 'public/illustration/solution').glob('*/desktop/*.png')):
        rel = f'solution/{src.parent.parent.name}/desktop/{src.stem}.jpg'
        save_jpeg(Image.open(src), ASSETS / rel, 2560)
        record(entries, rel, f'N0iire/gisact-website {src.relative_to(website)}', INTERNAL['license'])

    for f in sorted((ASSETS / 'fonts').glob('*.woff2')):
        record(entries, f'fonts/{f.name}', f'npm @fontsource-variable/{f.stem}', OFL)

    LEDGER.write_text(json.dumps(dict(sorted(entries.items())), indent=2) + '\n')
    print(f'{len(entries)} ledger entries')


if __name__ == '__main__':
    main()
