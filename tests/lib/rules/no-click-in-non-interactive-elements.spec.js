const { RuleTester } = require('eslint');
const noClickInNonInteractiveElements = require('../../../lib/rules/no-click-in-non-interactive-elements.js');

const ruleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: { ecmaVersion: 'latest' },
});

ruleTester.run('no-click-in-non-interactive-elements.js', noClickInNonInteractiveElements, {
  valid: [
    '<template><div>Text</div></template>',
    '<template><div @mouseenter="handler">Text</div></template>',
    '<template><div v-on="$listeners">Text</div></template>',
    '<template><button @click="handler">Text</button></template>',
  ],
  invalid: [
    {
      code: '<template><div @click="handler">Text</div></template>',
      errors: [
        { messageId: 'noClickInNonInteractiveElements', type: 'VAttribute' },
      ],
    },
    {
      code: '<template><span @click="handler">Text</span></template>',
      errors: [
        { messageId: 'noClickInNonInteractiveElements', type: 'VAttribute' },
      ],
    },
    {
      code: '<template><p @click="handler">Text</p></template>',
      errors: [
        { messageId: 'noClickInNonInteractiveElements', type: 'VAttribute' },
      ],
    },
    {
      code: '<template><h1 @click="handler">Text</h1></template>',
      errors: [
        { messageId: 'noClickInNonInteractiveElements', type: 'VAttribute' },
      ],
    },
    {
      code: '<template><h2 @click="handler">Text</h2></template>',
      errors: [
        { messageId: 'noClickInNonInteractiveElements', type: 'VAttribute' },
      ],
    },
    {
      code: '<template><h3 @click="handler">Text</h3></template>',
      errors: [
        { messageId: 'noClickInNonInteractiveElements', type: 'VAttribute' },
      ],
    },
  ],
});
