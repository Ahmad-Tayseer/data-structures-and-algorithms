'use strict';
const Node = require('../lib/node');

describe('testing Node', () => {
  test('Can successfully make a node', () => {
    const node = new Node('testing');
    expect(node).toBeInstanceOf(Node);
    expect(node.value).toEqual('testing');
    expect(node.next).toBeNull();
  });
});
