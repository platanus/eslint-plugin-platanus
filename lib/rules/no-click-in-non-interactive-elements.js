const NON_INTERACTIVE_ELEMENTS = [
  'div',
  'span',
  'p',
  'h1',
  'h2',
  'h3',
];

module.exports = {
  meta: {
    messages: {
      noClickInNonInteractiveElements:
        'Avoid using @click in non-interactive elements. Prefer <button> or <a> for links',
    },
    type: 'suggestion',
    docs: {
      description: 'Recommend usage of interactive elements for click event handling',
      categories: ['recommended'],
      // eslint-disable-next-line max-len
      url: 'https://github.com/platanus/eslint-plugin-platanus/tree/main/docs/rules/no-click-in-non-interactive-elements.md',
    },
    schema: [],
  },
  create(context) {
    return context.parserServices.defineTemplateBodyVisitor({
      VElement(node) {
        const onClickAttribute = node.startTag.attributes.find((attribute) =>
          attribute.directive &&
            attribute.key.name.name === 'on' &&
            attribute.key.argument &&
            attribute.key.argument.name === 'click',
        );
        if (NON_INTERACTIVE_ELEMENTS.includes(node.name) && onClickAttribute) {
          context.report({ node: onClickAttribute, messageId: 'noClickInNonInteractiveElements' });
        }
      },
    });
  },
};
