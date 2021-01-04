#!/bin/zsh
tsc src/load.ts
tsc src/about.ts
tsc src/gallery.ts
tsc src/order.ts
tsc src/index.ts
npx webpack
