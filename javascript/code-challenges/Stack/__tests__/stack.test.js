'use strict';

const Stack = require('../lib/stack');

describe('queue and stack', () => {

  test('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push('1');
    expect(stack.top.value).toEqual('1');
  });

  test('Can successfully push multiple values onto a stack?', () => {
    const stack = new Stack;
    stack.push('1');
    stack.push('2');
    stack.push('3');
    expect(stack.top.value).toEqual('3');
  });

  test('Can successfully pop off the stack?', () => {
    const stack = new Stack;
    stack.push('1');
    stack.push('2');
    stack.pop();
    expect(stack.top.value).toEqual('1');
  });

  test('Can successfully empty a stack after multiple pops?', () => {
    const stack = new Stack;
    stack.push('1');
    stack.push('2');
    stack.push('3');
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toBeNull;
  });

  test('Can successfully peek the next item on the stack?', () => {
    const stack = new Stack;
    stack.push('1');
    stack.push('2');
    expect(stack.peek()).toEqual('2');
    stack.push('3');
    expect(stack.peek()).toEqual('3');
  });

  test('Can successfully instantiate an empty stack?', () => {
    const stack = new Stack;
    expect(stack.top).toBeNull;
  });

  test('Calling pop or peek on empty stack raises exception?', () => {
    const stack = new Stack;
    expect(stack.pop()).toEqual('exception');
    expect(stack.peek()).toEqual('exception');
  });

});
