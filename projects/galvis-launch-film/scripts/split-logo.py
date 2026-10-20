"""Split assets/logo/galvis-main.svg into its anatomy: plates, hexagon, arrow.

Path order in the source: 1 hexagon, 2 arrow base, 3-4 arrow facets, 5-6 plates.
Usage: python3 scripts/split-logo.py
"""
import json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
src = (ROOT / 'assets/logo/galvis-main.svg').read_text()
head = re.match(r'<svg[^>]*>', src).group(0)
paths = re.findall(r'<path\b[^>]*/>', src)
grads = dict(re.findall(r'(?s)(<linearGradient id="([^"]+)".*?</linearGradient>)', src)[i][::-1] for i in range(4))
PARTS = {'hexagon': paths[0:1], 'arrow': paths[1:4], 'plates': paths[4:6]}

ledger_path = ROOT / 'assets/LICENSES.json'
ledger = json.loads(ledger_path.read_text())
for name, ps in PARTS.items():
    used = [grads[g] for g in re.findall(r'url\(#([^)]+)\)', ''.join(ps))]
    defs = f"<defs>\n{''.join(used)}\n</defs>\n" if used else ''
    (ROOT / f'assets/logo/parts/{name}.svg').write_text(f"{head}\n{chr(10).join(ps)}\n{defs}</svg>\n")
    ledger[f'logo/parts/{name}.svg'] = {'source': 'derived from logo/galvis-main.svg', 'license': 'internal (GISACT)', 'attribution': None}
ledger_path.write_text(json.dumps(dict(sorted(ledger.items())), indent=2) + '\n')
print({k: len(v) for k, v in PARTS.items()})
