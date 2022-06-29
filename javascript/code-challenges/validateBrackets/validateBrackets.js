'use strict';

const Stack = require('../Stack/lib/stack');

function validateBrackets(string) {
  let stack = new Stack();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
      stack.push(string[i]);
    } else if ((string[i] === ')' && stack.peek() === '(') || (string[i] === '}' && stack.peek() === '{') || (string[i] === ']' && stack.peek() === '[')) {
      stack.pop();
    } else if (string[i].match(/[A-Za-z ]/)) {
      continue;
    } else {
      return false;
    }
  }
  return stack.isEmpty() ? true : false;
}


module.exports = {
  validateBrackets: validateBrackets,
};
