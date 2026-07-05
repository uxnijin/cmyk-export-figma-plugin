# Figma CMYK Exporter Plugin

A premium, client-side Figma plugin that allows you to export any selected layer, group, component, or frame in Figma into print-ready CMYK formats.

## Features

- **Selectable File Formats**:
  - **PDF (.pdf)**: Generates a true, native CMYK (`/DeviceCMYK`) PDF using a lightweight, client-side binary compiler. Ideal for professional print workflows.
  - **JPEG (.jpg)**: Exports a soft-proofed RGB JPEG representing how colors will map to the CMYK color gamut on screen.
  - **PNG (.png)**: Exports a soft-proofed RGB PNG (transparency preserved) representing how colors will map to the CMYK color gamut.
- **High-Resolution DPI Scaling**:
  - **300 DPI**: High-quality professional print resolution (~4.17x scaling relative to Figma's default 72 DPI).
  - **150 DPI**: Medium-quality print resolution (~2.08x scaling).
  - **72 DPI**: Standard web/screen resolution (1x scaling).
  - **Custom Scales**: Export at exact 2x, 3x, or 4x scales.
- **Client-Side Processing**: Runs 100% locally in your Figma environment. No design data or assets are uploaded to external servers.

---

## How to Build the Plugin

First, make sure you have installed the project dependencies:
```bash
npm install
```

To compile the TypeScript files:
```bash
npm run build
```

To watch for changes and automatically compile on every file save:
```bash
npm run watch
```

To run the linter and ensure code styling standards are met:
```bash
npm run lint
```

---

## How to Load and Use in Figma

1. Open the Figma desktop app.
2. Go to **Menu > Plugins > Development > Import plugin from manifest...**.
3. Select the `manifest.json` file inside this directory.
4. Select any layer, frame, or group in your active Figma file.
5. Right-click, go to **Plugins > Development > CMYK Export**.
6. Select your preferred file format, resolution/DPI, and color mode, and click **Export Design**.
# cmyk-export-figma-plugin
