"use strict";

module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-sass-guidelines",
  ],
  ignoreFiles: [
    "./.next/**/*",
    "./dist/**/*",
    "./node_modules/**/*",
  ],
  rules: {
    "selector-max-compound-selectors": 5,
    "max-nesting-depth": 5
  }
};
