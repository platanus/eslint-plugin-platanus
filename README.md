# eslint-plugin-platanus

Plugin that adds rules to enforce conventions used in Platanus

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
yarn add eslint --dev
```

Next, install `eslint-plugin-platanus`:

```sh
yarn add eslint-plugin-platanus --dev
```

## Usage

Extend the `plugin:platanus/recommended` in your `.eslintrc.json`:

```json
{
  "extends": [
    "plugin:platanus/recommended"
  ]
}
```

This will add this plugin and configure all rules according to [recommended.js](./lib/configs/recommended.js) config.

## Supported Rules

- [no-click-in-non-interactive-elements](./docs/rules/no-click-in-non-interactive-elements.md)


