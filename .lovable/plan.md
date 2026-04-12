

## Plan: Replace phone image and remove white background

The new image has a white background that clashes with the dark hero section (`#0f0f1a`). I'll use a Python script to remove the white background (make it transparent), then save the processed image as the new asset.

### Steps

1. **Remove white background** — Use a Python script with Pillow to convert the white background to transparent (PNG with alpha channel). The phone and screen content will remain intact.

2. **Replace the asset** — Save the processed image to `src/assets/banned-phone.png`, replacing the current one.

3. **No code changes needed** — The HeroSection already imports and displays `banned-phone.png` with a red glow drop shadow, so it will work seamlessly with the new transparent image.

### Technical detail
- Use Pillow's flood fill or threshold approach: pixels near white (RGB > 240) at the edges get set to transparent
- This preserves the phone's red glow and screen content while blending naturally with the dark background

