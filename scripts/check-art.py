"""Validate art deliverables and render a 48px contact sheet for visual review."""
import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
ART = ROOT / 'public' / 'art'
manifest = json.loads((ART / 'manifest.json').read_text(encoding='utf-8'))
assets = manifest['assets']
errors = []
report = []
font = ImageFont.truetype('C:/Windows/Fonts/segoeui.ttf', 12)
columns, cell_w, cell_h = 6, 220, 132
sheet = Image.new('RGB', (columns * cell_w, ((len(assets) + columns - 1) // columns) * cell_h), '#fff8ec')
draw = ImageDraw.Draw(sheet)
for i, asset in enumerate(assets):
    path = ART / asset['file']
    x, y = (i % columns) * cell_w, (i // columns) * cell_h
    draw.text((x + 8, y + 106), asset['file'], fill='#2b211b', font=font)
    if not path.exists():
        errors.append(f"Missing: {asset['file']}")
        draw.text((x + 10, y + 35), 'MISSING', fill='#d7263d', font=font)
        continue
    try:
        with Image.open(path) as original:
            if original.format != 'PNG':
                errors.append(f"Not PNG: {asset['file']}")
            image = original.convert('RGBA')
    except OSError as error:
        errors.append(f"Cannot read: {asset['file']}: {error}")
        continue
    if image.size != (asset['width'], asset['height']):
        errors.append(f"Wrong dimensions: {asset['file']} {image.size}")
    alpha = image.getchannel('A')
    bbox = alpha.point(lambda a: 255 if a > 16 else 0).getbbox()
    if not bbox:
        errors.append(f"Empty image: {asset['file']}")
    if asset['transparent'] and alpha.getextrema()[0] != 0:
        errors.append(f"Missing transparent background: {asset['file']}")
    if asset['transparent'] and any(alpha.getpixel(p) > 0 for p in [(0, 0), (image.width - 1, 0), (0, image.height - 1), (image.width - 1, image.height - 1)]):
        errors.append(f"Opaque corners: {asset['file']}")
    for px, background in [(x + 28, '#f6e9d2'), (x + 134, '#2b211b')]:
        draw.rounded_rectangle((px - 8, y + 14, px + 72, y + 94), radius=8, fill=background)
        small = image.copy()
        small.thumbnail((48, 48), Image.Resampling.LANCZOS)
        sheet.paste(small, (px + (64 - small.width) // 2, y + 30 + (48 - small.height) // 2), small)
    report.append({'file': asset['file'], 'size': image.size, 'alpha_range': alpha.getextrema(), 'subject_bounds': bbox})
review = ROOT / 'docs' / 'art-review'
review.mkdir(parents=True, exist_ok=True)
sheet.save(review / 'contact-sheet-48.png')
for group in dict.fromkeys(asset['group'] for asset in assets):
    members = [asset for asset in assets if asset['group'] == group]
    preview = Image.new('RGB', (960, ((len(members) + 3) // 4) * 160), '#fff8ec')
    pen = ImageDraw.Draw(preview)
    for i, asset in enumerate(members):
        path = ART / asset['file']
        if not path.exists():
            continue
        try:
            with Image.open(path) as original:
                image = original.convert('RGBA')
        except OSError:
            continue
        x, y = (i % 4) * 240, (i // 4) * 160
        for size, offset in [(96, 12), (48, 138)]:
            thumbnail = image.copy()
            thumbnail.thumbnail((size, size), Image.Resampling.LANCZOS)
            preview.paste(thumbnail, (x + offset, y + 12 + (96 - thumbnail.height) // 2), thumbnail)
        pen.text((x + 8, y + 126), asset['file'], fill='#2b211b', font=font)
    preview.save(review / f'{group}.png')
(review / 'validation.json').write_text(json.dumps({'expected': len(assets), 'present': len(report), 'errors': errors, 'assets': report}, indent=2), encoding='utf-8')
print(f"Art: {len(report)}/{len(assets)} present; {len(errors)} errors")
for error in errors:
    print(error)
raise SystemExit(bool(errors))
