import { build } from "esbuild";

await build({
    entryPoints: ["src/index.ts"],
    format: "esm",
    platform: "browser",
    bundle: true,
    sourcemap: true,
    external: ["react", "react-reconciler", "@cruciblehq/ui"],
    define: {
        "process.env.NODE_ENV": '"development"',
    },
    tsconfig: "tsconfig.base.json",
    outdir: "dist/esm-browser/",
    outbase: "src",
})
