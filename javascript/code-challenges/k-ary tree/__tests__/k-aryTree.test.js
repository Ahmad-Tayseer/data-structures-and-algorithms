'use strict';

const { Node, KaryTree } = require('../k-aryTree');

let tree = null, result = null;

describe('K-ARY TEST', () => {

  beforeAll(() => {
    let fifteen = new Node(15);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);

    fifteen.children = [two, three, four, five];
    two.parent = fifteen;
    three.parent = fifteen;
    four.parent = fifteen;
    five.parent = fifteen;
    tree = new KaryTree(fifteen);
    result = tree.fizzBuzzTree(tree);
  });

  it('If the value is divisible by 3 and 5, replace the value with “FizzBuzz”.', () => {
    expect(result.root.value).toEqual('FizzBuzz');
  });
  it('If the value is divisible by 3, replace the value with “Fizz”.', () => {
    expect(result.root.children[1].value).toEqual('Fizz');
  });
  it('If the value is divisible by 5, replace the value with “Buzz”.', () => {
    expect(result.root.children[3].value).toEqual('Buzz');
  });
  it('If the value is not divisible by 3 or 5, simply turn the number into a String.', () => {
    expect(result.root.children[0].value).toEqual('2');
  });
});
