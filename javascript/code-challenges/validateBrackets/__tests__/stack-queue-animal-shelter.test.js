'use strict';
const { validateBrackets } = require('../validateBrackets');

describe('Test the validateBrackets function', () => {

  test('Test 1', () => {
    expect(validateBrackets('{}')).toEqual(true);
  });

  test('Test 2', () => {
    expect(validateBrackets('{}(){}')).toEqual(true);
  });

  test('Test 3', () => {
    expect(validateBrackets('()[[Extra Characters]]')).toEqual(true);
  });

  test('Test 4', () => {
    expect(validateBrackets('(){}[[]]')).toEqual(true);
  });

  test('Test 5', () => {
    expect(validateBrackets('{}{Code}[Fellows](())')).toEqual(true);
  });

  test('Test 6', () => {
    expect(validateBrackets('[({}]')).toEqual(false);
  });

  test('Test 7', () => {
    expect(validateBrackets('(](')).toEqual(false);
  });

  test('Test 8', () => {
    expect(validateBrackets('{(})')).toEqual(false);
  });

  test('Test 9', () => {
    expect(validateBrackets('{')).toEqual(false);
  });

  test('Test 10', () => {
    expect(validateBrackets(')')).toEqual(false);
  });

  test('Test 11', () => {
    expect(validateBrackets('[}')).toEqual(false);
  });

});
