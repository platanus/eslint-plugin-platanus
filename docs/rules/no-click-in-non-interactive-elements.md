# platanus/no-click-in-non-interactive-elements

> Recommend usage of interactive elements for click event handling

- :gear: This rule is included in `"plugin:platanus/recommended"`
- :wrench: :x: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) **can't automatically fix** the problems reported by this rule.

## :book: Rule Details

This rule advises against using `@click` in non-interactive elements. To avoid triggering in custom components, this rule is checked only for a blacklist of HTML elements.

```vue
<template>
  <!-- ✓ GOOD -->
  <button @click="handler"> Text </button>

  <!-- ✗ BAD -->
  <div @click="handler"> Text </div>
  <span @click="handler"> Text </span>
  <p @click="handler"> Text </p>
  <h1 @click="handler"> Text </h1>
  <h2 @click="handler"> Text </h2>
  <h3 @click="handler"> Text </h3>
</template>
```

## :wrench: Options

This rule has no options
