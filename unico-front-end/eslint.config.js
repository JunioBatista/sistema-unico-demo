import js from "@eslint/js";
import globals from "globals";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from "eslint/config";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

const compat = new FlatCompat({
  baseDirectory: import.meta.url,
});

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      prettier: pluginPrettier,
    },
    extends: [js.configs.recommended, configPrettier],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-unused-vars": ["warn", { args: "none" }],
      "no-empty": "warn",
      "react/prop-types": "off",
      "prettier/prettier": "error",
    },
  },

  ...compat.extends("plugin:react/recommended", "plugin:react/jsx-runtime"),

  {
    files: ["**/*.{js,jsx}"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
]);
