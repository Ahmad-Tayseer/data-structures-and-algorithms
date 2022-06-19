'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.length ++;
      this.tail = this.head;
      return this;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      this.length ++;
      this.tail = current.next;
      return this;
    }
  }

  insert(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.length ++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length ++;
    }
  }

  include(value) {
    const givenValueNode = new Node(value);
    let current = this.head;
    let result = false;
    while (current) {
      if (current.value === givenValueNode.value) {
        result = true;
        break;
      } else {
        current = current.next;
      }
    }
    return result;
  }

  toString() {
    let llString = '';
    if (this.head) {
      llString = llString + `{${this.head.value}}`;
      let current = this.head;
      while(current.next) {
        llString = llString + ` -> {${current.next.value}}`;
        current = current.next;
      }
      llString = llString + ' -> NULL';
    }
    return llString;
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    if (current.value === value) {
      newNode.next = current;
      this.head = newNode;
      return this;
    }
    while (current.next) {
      if(current.next.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return this;
      }
      current = current.next;
    }
    return this;
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    if(this.tail.value === value) {
      this.tail.next = newNode;
      this.tail = this.tail.next;
      return this;
    }
    if(current.value === value) {
      newNode.next = current.next;
      current.next = newNode;
      return this;
    }
    while(current.next) {
      if(current.next.value === value) {
        newNode.next = current.next.next;
        current.next.next = newNode;
        return this;
      }
      current = current.next;
    }
    return this;
  }

  kthFromEnd(index) {
    let nodeIndex = this.length - index;
    let i = 1;
    let current = this.head;
    if (index < 0 || index > this.length) {
      return 'Exception';
    } else {
      while(i < nodeIndex) {
        current = current.next;
        i++;
      }
      return current.value;
    }
  }

  zipLists(list1, list2) {
    let node1 = list1.head;
    let node2 = list2.head;
    let i = 0;
    this.head = node1;
    node1 = node1.next;
    let current = this.head;
    while(node1 || node2) {
      if (i % 2 === 0) {
        if (node2) {
          current.next = node2;
          node2 = node2.next;
        }
      } else {
        if (node1) {
          current.next = node1;
          node1 = node1.next;
        }
      }
      current = current.next;
      i++;
    }
    return this;
  }

}

module.exports = LinkedList;
