# Crucible UI Web

Crucible UI Web is the web-based renderer for Crucible UI. It renders Crucible
UI's abstract component model into browser primitives, managing all interactions
with the native environment.

## Installation

Crucible UI Web is not yet distributed, so it's only available by building from source:

```sh
npm run build
```

This produces three build variants, available under the `dist/` folder:

| Variant           | Description                           | Platform   | Bundled | Minified |
|-------------------|---------------------------------------|------------|---------|----------|
| `esm-neutral`     | ESM for bunlders and npm distribution | neutral    | No      | No       |
| `esm-browser`     | ESM for browsers                      | browser    | Yes     | No       |
| `esm-browser.min` | ESM for browsers (minified)           | browser    | Yes     | Yes      |

All builds are ESM and include source maps.

## Development

After cloning the repository, install dependencies:

```sh
npm install
```

Check builds and lint:

```sh
npm run check
```

Automatically fix linter errors:

```sh
npm run lint:fix
```

## License

Copyright (c) 2025 Crucible Inc. All rights reserved.
