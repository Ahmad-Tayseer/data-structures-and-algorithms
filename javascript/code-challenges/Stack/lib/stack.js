'use strict';

const Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
    // return this.top === null;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.length++;
    } else {
      newNode.next = this.top;
      this.top = newNode;
      this.length++;
    }
  }

  pop() {
    if (this.isEmpty()) {
      return 'exception';
    } else {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      this.length--;
      return temp.value;
    }
  }

  peek() {
    if (this.isEmpty()) {
      return 'exception';
    } else {
      return this.top.value;
    }
  }

}

module.exports = Stack;
