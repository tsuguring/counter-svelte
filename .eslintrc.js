module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "svelte3"],
  overrides: [
    {
      // files: ["*.svelte"], 公式ではこう書かれているがディレクトリ内のファイルが対象にならないため、修正
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  rules: {
    indent: ["error", 2],
  },
  settings: {
    "svelte3/typescript": () => require("typescript"), // 追加
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
};
