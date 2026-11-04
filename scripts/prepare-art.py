"""Export lightweight game images while retaining the original PNG masters."""
import argparse
import json
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1] / 'public' / 'art'
out = root / 'game'
out.mkdir(exist_ok=True)
manifest = json.loads((root / 'manifest.json').read_text(encoding='utf-8-sig'))
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--group', action='append', help='Only export this manifest group; repeat for more groups')
args = parser.parse_args()
assets = [asset for asset in manifest['assets'] if not args.group or asset['group'] in args.group]
for asset in assets:
    with Image.open(root / asset['file']) as image:
        size = 1920 if asset['id'] == 'title_bg' else 384 if asset['id'] in ['logo_cat', 'app_icon'] else 192
        image.thumbnail((size, size), Image.Resampling.LANCZOS)
        image.save(out / f"{asset['id']}.webp", 'WEBP', quality=86, method=6)
print(f"Exported {len(assets)} game images: {sum((out / (a['id'] + '.webp')).stat().st_size for a in assets) / 1024:.0f} KiB")
