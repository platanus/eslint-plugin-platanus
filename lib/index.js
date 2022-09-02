/**
 * @fileoverview platanus plugin
 * @author Platanus
 */
'use strict';

const requireIndex = require('requireindex');

module.exports = {
  rules: requireIndex(`${__dirname}/rules`),
  configs: requireIndex(`${__dirname}/configs`),
};
