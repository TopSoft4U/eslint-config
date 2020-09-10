## Installation

  ```sh
  yarn add -D @topsoft4u/linters eslint
  ```

## Usage

Now add the config to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@topsoft4u/linters"
  }
}
```

to your `.eslintrc`:

```json
{
  "extends": "@topsoft4u/linters"
}
```

or `.eslintrc.js`:

```js
module.exports = {
  extends: '@topsoft4u/linters',
}
```
