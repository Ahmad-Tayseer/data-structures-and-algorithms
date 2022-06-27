'use strict';
const { AnimalShelter } = require('../stack-queue-animal-shelter');
const { Cat } = require('../stack-queue-animal-shelter');
const { Dog } = require('../stack-queue-animal-shelter');

describe('Test the stack-queue-animal-shelter classes', () => {
  const newAnimal = new AnimalShelter();

  test('Creating instance of AnimalShelter class', () => {
    expect(newAnimal).toBeInstanceOf(AnimalShelter);
  });

  test('Test enqueue/dequeue methods for Cat class', () => {
    const newAnimal = new AnimalShelter();
    const newCat = new Cat('cat');
    newAnimal.enqueue(newCat);
    expect(newAnimal.queue.front.value.type).toBe('cat');
    expect(typeof newAnimal.dequeue('cat')).toEqual('object');
  });

  test('Test enqueue/dequeue methods for Dog class', () => {
    const newAnimal = new AnimalShelter();
    const newDog = new Dog('dog');
    newAnimal.enqueue(newDog);
    expect(newAnimal.queue.front.value.type).toBe('dog');
    expect(typeof newAnimal.dequeue('dog')).toEqual('object');
  });

  test('Test enqueue/dequeue methods with bad pref', () => {
    const newAnimal = new AnimalShelter();
    const newDog = new Dog('dog');
    newAnimal.enqueue(newDog);
    expect(newAnimal.dequeue('bird')).toBeNull();
  });
});
