"use strict";

module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-perf/recommended",
    "plugin:react/recommended"
  ],
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
  },
  "parserOptions": {
    "ecmaFeatures": {
      jsx: true
    },
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "globals": {
    "React": "writable"
  },
  "plugins": [
    "@typescript-eslint",
    "import",
    "json",
    "react",
    "react-hooks",
    "react-perf",
    "simple-import-sort",
    "unused-imports"
  ],
  "rules": {
    "semi": "error",
    "quotes": [
      "warn",
      "double",
      {
        "avoidEscape": true
      }
    ],
    "indent": ["error", 2],
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "array-simple"
      }
    ],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "no-public"
      }
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "eqeqeq": "error",
    "no-trailing-spaces": "warn",
    "func-style": "error",
    "no-alert": "error",
    "no-eval": "error",
    'no-shadow': "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-undef": "error",
    "no-underscore-dangle": "error",
    "react/jsx-tag-spacing": [
      "error",
      {
        "beforeSelfClosing": "always"
      }
    ],
    "no-unused-expressions": [
      "error",
      {
        "allowTaggedTemplates": true
      }
    ],
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports-ts": "error",
    "unused-imports/no-unused-vars-ts": [
      "warn",
      { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
    ],
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "react/no-render-return-value": "off",
    "react/jsx-fragments": "error",
    "react/no-danger": "error",
    "simple-import-sort/sort": "error",
    "object-curly-spacing": [
      "error",
      "never"
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        "block": {
          "balanced": true
        }
      }
    ],
    "json/*": [
      "error",
      {
        "allowComments": true
      }
    ]
  },
  "overrides": [
    {
      "files": [
        "*.d.ts"
      ],
      "rules": {
        "spaced-comment": "off"
      }
    }
  ],
  "ignorePatterns": [
    "**/*.*",
    "Dockerfile",
    "LICENSE",
    "!*.js",
    "!*.jsx",
    "!*.ts",
    "!*.tsx",
    "**/.next",
    "**/build",
    "**/dist",
    "**/esm",
    "**/locales/**/*.missing.json",
    "**/sw.js",
    "**/workbox-*.js",
    "**/node_modules"
  ]
};
