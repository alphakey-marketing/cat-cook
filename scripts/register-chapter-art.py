"""Register generated chapter PNG masters without changing their pixels."""
import json
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ART = ROOT / 'public' / 'art'
prompts = json.loads((ROOT / 'docs/art-review/chapter-art-prompts.json').read_text(encoding='utf-8'))
manifest_path = ART / 'manifest.json'
manifest = json.loads(manifest_path.read_text(encoding='utf-8-sig'))
known = {asset['id'] for asset in manifest['assets']}
for asset in prompts['assets']:
    filename = f"{asset['id']}.png"
    with Image.open(ART / filename) as image:
        assert image.format == 'PNG', filename
        assert image.mode == 'RGBA' and image.getchannel('A').getextrema()[0] == 0, filename
        width, height = image.size
    if asset['id'] not in known:
        manifest['assets'].append({
            'id': asset['id'], 'file': filename,
            'group': f"chapter-{asset['group']}", 'subject': asset['subject'],
            'width': width, 'height': height, 'transparent': True,
        })
        known.add(asset['id'])
manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(f"Registered {len(prompts['assets'])} chapter art assets; original pixels and alpha preserved")
