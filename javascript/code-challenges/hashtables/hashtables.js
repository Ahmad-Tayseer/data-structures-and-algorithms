const Linkedlist = require('../Linked-List-Challenges/lib/linkedlist');

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    const asciicodeSum = key.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0);
    const multiPrime = asciicodeSum * 599;
    const theIndex = multiPrime % this.size;
    return theIndex;
  }

  set(key, value) {
    let hashIndex = this.hash(key);
    if(!this.table[hashIndex]) {
      this.table[hashIndex] = new Linkedlist();
    }
    this.table[hashIndex].append({ [key]: value });
  }

  get(key) {
    let hashIndex = this.hash(key);
    let bucket = this.table[hashIndex];
    if (bucket) {
      let current = bucket.head;
      while (current) {
        if (current.value[key]) {
          return current.value[key];
        } else {
          current = current.next;
        }
      }
    }
    return null;
  }

  contains(key) {
    let hashIndex = this.hash(key);
    let bucket = this.table[hashIndex];
    if (bucket) {
      let current = bucket.head;
      while (current) {
        if (current.value[key]) {
          return true;
        } else {
          current = current.next;
        }
      }
      return false;
    }
    return false;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        keys.push(this.table[i].keys());
      }
    }
    return keys;
  }
}

function repeatedWord(str) {

}

module.exports = { HashTable };
