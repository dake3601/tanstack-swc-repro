# SWC Repro

Can't resolve 'react-refresh/runtime' when using swc for react in rsbuild with tanstack and hmr off.

## Error

File: ./src/routes/__root.tsx:58:1-90
  × Module not found: Can't resolve 'react-refresh/runtime' in 'C:\git\swc-repro2\src\routes'
    ╭─[58:0]
 56 │     }, this);
 57 │ }
 58 │ import { performReactRefresh as__tsr_performReactRefresh } from 'react-refresh/runtime';
    · ─────────────────────────────────────────────────────────────────────────────────────────
 59 │ if (import.meta.webpackHot) {
 60 │     var_hot;
    ╰────
Import traces (entry → error):
  ./node_modules/.pnpm/@<tanstack+react-start@1.167_0935be963ccb3ca3bd91056b4df976cf>/node_modules/@tanstack/react-start/dist/plugin/default-entry/client.tsx
  ./node_modules/.pnpm/@<tanstack+react-start@1.167_0935be963ccb3ca3bd91056b4df976cf>/node_modules/@tanstack/react-start/dist/esm/client.js
  … (5 hidden)
  ./src/routeTree.gen.ts
  ./src/routes/__root.tsx ×

## Workaround

Install react-refresh
