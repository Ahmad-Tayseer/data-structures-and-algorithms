'use strict';

const Queue = require('../lib/queue');

describe('queue and stack', () => {

  test('Can successfully enqueue into a queue?', () => {
    const queue = new Queue();
    queue.enqueue('1');
    expect(queue.front.value).toEqual('1');
  });

  test('Can successfully enqueue multiple values into a queue?', () => {
    const queue = new Queue();
    queue.enqueue('1');
    queue.enqueue('2');
    queue.enqueue('3');
    expect(queue.front.value).toEqual('1');
    expect(queue.rear.value).toEqual('3');
  });

  test('Can successfully dequeue out of a queue the expected value?', () => {
    const queue = new Queue();
    queue.enqueue('1');
    expect(queue.front.value).toEqual('1');
    queue.dequeue();
    expect(queue.front).toBeNull;
    expect(queue.rear).toBeNull;
  });

  test('Can successfully peek into a queue, seeing the expected value?', () => {
    const queue = new Queue();
    expect(queue.peek()).toBeNull;
    queue.enqueue('1');
    expect(queue.peek()).toEqual('1');
    queue.enqueue('2');
    queue.enqueue('3');
    expect(queue.peek()).toEqual('1');
  });

  test('Can successfully empty a queue after multiple dequeues?', () => {
    const queue = new Queue();
    queue.enqueue('1');
    queue.enqueue('2');
    queue.enqueue('3');
    queue.dequeue();
    expect(queue.front.value).toEqual('2');
    queue.dequeue();
    expect(queue.front.value).toEqual('3');
    queue.dequeue();
    expect(queue.front).toBeNull;
  });

  test('Can successfully instantiate an empty queue?', () => {
    const queue = new Queue();
    expect(queue.front).toBeNull;
  });

  test('Calling dequeue or peek on empty queue raises exception?', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toEqual('exception');
    expect(queue.peek()).toEqual('exception');
  });

});
