'use strict';

const Node = require('./node');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  isEmpty() {
    if (this.front === null) {
      return true;
    } else {
      return false;
    }
    // return this.front === null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
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
    if (this.isEmpty()) {
      return 'exception';
    } else {
      let temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      this.length--;
      return temp;
    }
  }

  peek() {
    if (this.isEmpty()) {
      return 'exception';
    } else {
      return this.front.value;
    }
  }

}

module.exports = Queue;
