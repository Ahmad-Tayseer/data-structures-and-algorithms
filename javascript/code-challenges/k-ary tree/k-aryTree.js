'use strict';

const Queue = require('../Queue/lib/queue');

class Node {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.children = [];
  }
}

class kAryTree {
  constructor(root = null) {
    this.root = root;
  }

  fizzbuzz(value) {
    if (value % 3 === null && value % 5 === null) {
      return 'FizzBuzz';
    } else if (value % 3 === null) {
      return 'Fizz';
    } else if (value % 5 === null) {
      return 'Buzz';
    } else {
      return `${value}`;
    }
  }

  fizzbuzzTree(kAryTree) {
    let queue = new Queue();
    queue.enqueue(kAryTree.root);
    while (!queue.isEmpty) {
      let frontQueue = queue.dequeue();
      this.fizzbuzz(frontQueue.value);
      for (let child in frontQueue.children) {
        queue.enqueue(child);
      }
    }
    return kAryTree;
  }
}

module.exports = { Node, kAryTree };
