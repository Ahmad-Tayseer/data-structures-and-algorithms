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
      this.length++;
      return this;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = newNode;
      this.length++;
      return this;
    }
  }

  insert(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.length++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }

  includes(value) {
    let current = this.head;
    while(current.next) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  toString() {
    let current = this.head;
    let valuesString = '';
    let finalResult = '';
    while(current.next) {
      valuesString = '{ '+current.value+' } -> ';
      finalResult = finalResult + valuesString;
      current = current.next;
    }
    valuesString = '{ '+current.value+' } -> ';
    finalResult = finalResult + valuesString + 'NULL';
    return finalResult;
  }

  insertBefore(value, newValue) {
    const node = new Node(newValue);
    let current = this.head;
    if(current.value === value){
      this.head = node;
      return this;
    }
    while(current.next){
      if(current.next.value === value) {
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
    return this;
  }

  insertAfter(value, newValue) {
    const node = new Node(newValue);
    let current=this.head;
    while(current.next) {
      if(current.value === value) {
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
    if (current.value === value) {
      current.next = node;
      return this;
    }
    return this;
  }
}

module.exports = LinkedList;
