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

Add `platanus` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "platanus"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "platanus/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


