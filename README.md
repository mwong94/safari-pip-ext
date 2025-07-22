# Picture-in-Picture Helper

A minimal Safari Web Extension that adds a toolbar button to toggle Picture-in-Picture mode for the first `<video>` element on any webpage.

## Features

- Automatically finds the first `<video>` element on the page.
- Toggles Picture-in-Picture mode on button click.
- Lightweight, no extra dependencies.

## File Structure
my-pip-extension/
├── manifest.json
├── background.js
├── icons/
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
└── README.md

## Installation

1. **Prerequisites**
   - macOS 14+
   - Safari 14+
   - Xcode 12+

2. **Load into Safari**
   1. Open Xcode and choose **File → New → Project…**.
   2. Select **Safari Web Extension App** and name it “Picture-in-Picture Helper.”
   3. Replace the generated `manifest.json` and `background.js` with the ones from this repo.
   4. Drag your `icons/` folder into the extension’s Resources.
   5. Select the extension scheme and click **Run** — Safari will open with the extension in developer mode.

3. **Enable the Extension**
   - In Safari, go to **Safari → Settings → Extensions**.
   - Find **Picture-in-Picture Helper** and check the box to enable it.

## Usage

1. Visit any page containing a `<video>` element.
2. Click the extension’s toolbar button.
3. The video enters Picture-in-Picture mode.
4. Click the button again to exit PiP.

## Development

- **background.js** — Logic to detect the video element and toggle PiP.
- **manifest.json** — Metadata, permissions, icons.
- **icons/** — Toolbar icons in multiple sizes.

After editing code, rebuild and run via Xcode to test changes.

