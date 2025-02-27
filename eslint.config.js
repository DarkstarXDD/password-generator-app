import eslintJS from "@eslint/js"
import globals from "globals"
import eslintReact from "eslint-plugin-react"
import eslintReactHooks from "eslint-plugin-react-hooks"
import eslintReactRefresh from "eslint-plugin-react-refresh"
import eslintJsxA11y from "eslint-plugin-jsx-a11y"
import eslintTypescript from "@typescript-eslint/eslint-plugin"
import typescriptParser from "@typescript-eslint/parser"

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["dist"],

    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },

    settings: {
      react: {
        version: "18.3",
      },
    },

    plugins: {
      react: eslintReact,
      "react-hooks": eslintReactHooks,
      "react-refresh": eslintReactRefresh,
      "jsx-a11y": eslintJsxA11y,
      "@typescript-eslint": eslintTypescript,
    },

    rules: {
      ...eslintJS.configs.recommended.rules,
      ...eslintReact.configs.recommended.rules,
      ...eslintReact.configs["jsx-runtime"].rules,
      ...eslintReactHooks.configs.recommended.rules,
      ...eslintJsxA11y.configs.recommended.rules,
      ...eslintTypescript.configs.recommended.rules,

      "no-use-before-define": "error",
      "no-duplicate-imports": "error",
      camelcase: "error",

      "react/jsx-no-target-blank": "off",
      "react/prop-types": "off",

      "jsx-a11y/anchor-is-valid": "off",
      "jsx-a11y/prefer-tag-over-role": "error",

      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
]
