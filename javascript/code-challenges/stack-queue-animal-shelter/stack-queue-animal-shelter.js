'use strict';

const Queue = require('../Queue/lib/queue');

class AnimalShelter {
  constructor() {
    this.queue = new Queue();
  }

  enqueue(animal) {
    this.queue.enqueue(animal);
  }

  dequeue(pref) {
    if (this.queue.front.type === pref) {
      return this.queue.dequeue;
    } else {
      return null;
    }
  }

}

class Cat extends AnimalShelter {
  constructor(type) {
    super();
    this.type = type;
  }
}

class Dog extends AnimalShelter {
  constructor(type) {
    super();
    this.type = type;
  }
}


module.exports = {
  AnimalShelter: AnimalShelter,
  Cat: Cat,
  Dog: Dog,
};
