#!/bin/zsh
tsc -w src/load.ts
tsc -w src/about.ts
tsc -w src/gallery.ts
tsc -w src/order.ts
tsc -w src/index.ts
npx webpack
