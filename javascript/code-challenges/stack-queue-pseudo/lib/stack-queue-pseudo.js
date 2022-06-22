'use strict';

const Node = require('./node');

class pseudoQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.top = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.front === null) {
      this.front = newNode;
      this.rear = newNode;
      this.length++;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
      this.length++;
    }
  }

  dequeue() {
    if (this.front === null) {
      return 'exception';
    } else {
      let temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      this.length--;
      return temp;
    }
  }

  push(value) {
    const newNode = new Node(value);
    if (this.top === null) {
      this.top = newNode;
      this.length++;
    } else {
      newNode.next = this.top;
      this.top = newNode;
      this.length++;
    }
  }

  pop() {
    if (this.top === null) {
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
    if (this.top === null) {
      return 'exception';
    } else {
      return this.top.value;
    }
  }

}

module.exports = pseudoQueue;
