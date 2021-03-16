import smartAsset from "rollup-plugin-smart-asset"

export default {
  input: "src/index.js",
  preserveModules: true,
  plugins: [
    smartAsset({
      url: "copy",
      keepImport: true,
      useHash: false,
      keepName: true,
      outputDir: "dist/x",
      assetsPath: "../public/assets",
      extensions: [".txt"]
    })
  ],
  output: [
    { dir: "dist/cjs", format: "cjs" },
    { dir: "dist/esm", format: "esm" }
  ]
}
