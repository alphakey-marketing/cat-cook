"""Export lightweight game images while retaining the original PNG masters."""
import json
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1] / 'public' / 'art'
out = root / 'game'
out.mkdir(exist_ok=True)
manifest = json.loads((root / 'manifest.json').read_text(encoding='utf-8-sig'))
for asset in manifest['assets']:
    with Image.open(root / asset['file']) as image:
        size = 1920 if asset['id'] == 'title_bg' else 384 if asset['id'] in ['logo_cat', 'app_icon'] else 192
        image.thumbnail((size, size), Image.Resampling.LANCZOS)
        image.save(out / f"{asset['id']}.webp", 'WEBP', quality=86, method=6)
print(f"Exported {len(manifest['assets'])} game images: {sum(p.stat().st_size for p in out.glob('*.webp')) / 1024:.0f} KiB")
