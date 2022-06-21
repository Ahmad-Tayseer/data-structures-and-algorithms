'use strict';

const LinkedList = require('../lib/linkedlist');

describe('Linked List Test', () => {

  test('Can successfully instantiate an empty linked list', () => {
    const Ll = new LinkedList();
    expect(Ll.head).toBeNull;
  });

  test('Can properly insert into the linked list', () => {
    const Ll = new LinkedList();
    Ll.insert('1');
    expect(Ll.head.value).toEqual('1');
    Ll.insert('2');
    expect(Ll.head.value).toEqual('2');
    Ll.insert('3');
    expect(Ll.head.value).toEqual('3');
  });

  test('The head property will properly point to the first node in the linked list', () => {
    const Ll = new LinkedList();
    Ll.append('1');
    expect(Ll.head.value).toEqual('1');
    Ll.append('2');
    expect(Ll.head.value).toEqual('1');
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    const Ll = new LinkedList();
    expect(Ll.length).toBeNull;
    Ll.append('1');
    Ll.append('1');
    Ll.append('1');
    Ll.append('1');
    Ll.append('1');
    expect(Ll.length).toEqual(5);
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    const Ll = new LinkedList();
    Ll.append('1');
    Ll.append('2');
    Ll.append('3');
    expect(Ll.include('1')).toEqual(true);
    expect(Ll.include('2')).toEqual(true);
    expect(Ll.include('3')).toEqual(true);
    expect(Ll.include('4')).toEqual(false);
    expect(Ll.include('5')).toEqual(false);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    const Ll = new LinkedList();
    Ll.append('1');
    Ll.append('2');
    Ll.append('3');
    expect(Ll.include('4')).toEqual(false);
    expect(Ll.include('5')).toEqual(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    const Ll = new LinkedList();
    expect(Ll.toString()).toEqual('');
    Ll.append('1');
    Ll.append('2');
    Ll.append('3');
    expect(Ll.toString()).toEqual('{1} -> {2} -> {3} -> NULL');
  });

  // ============================================================================================================== //

  test('Can successfully add a node to the end of the linked list', () => {
    const Ll = new LinkedList();
    expect(Ll.tail).toBeNull;
    Ll.append('1');
    expect(Ll.tail.value).toEqual('1');
  });

  test('Can successfully add multiple nodes to the end of a linked list', () => {
    const Ll = new LinkedList();
    expect(Ll.tail).toBeNull;
    Ll.append('1');
    expect(Ll.tail.value).toEqual('1');
    Ll.append('2');
    expect(Ll.tail.value).toEqual('2');
    Ll.append('3');
    expect(Ll.tail.value).toEqual('3');
  });

  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const Ll = new LinkedList();
    Ll.append('1');
    Ll.append('2');
    Ll.append('3');
    Ll.insertBefore('2', '10');
    expect(Ll.head.next.value).toEqual('10');
    expect(Ll.toString()).toEqual('{1} -> {10} -> {2} -> {3} -> NULL');
  });

  test('Can successfully insert a node before the first node of a linked list', () => {
    const Ll = new LinkedList();
    Ll.append('1');
    Ll.append('2');
    Ll.append('3');
    Ll.insertBefore('1', '5');
    expect(Ll.head.value).toEqual('5');
    expect(Ll.head.next.value).toEqual('1');
    expect(Ll.tail.value).toEqual('3');
    expect(Ll.toString()).toEqual('{5} -> {1} -> {2} -> {3} -> NULL');
  });

  test('Can successfully insert after a node in the middle of the linked list', () => {
    const Ll = new LinkedList();
    Ll.append('1');
    Ll.append('2');
    Ll.append('3');
    Ll.insertAfter('2', '10');
    expect(Ll.head.next.value).toEqual('2');
    expect(Ll.head.next.next.value).toEqual('10');
    expect(Ll.toString()).toEqual('{1} -> {2} -> {10} -> {3} -> NULL');
  });

  test('Can successfully insert a node after the last node of the linked list', () => {
    const Ll = new LinkedList();
    Ll.append('1');
    Ll.append('2');
    Ll.append('3');
    Ll.insertAfter('3', '5');
    expect(Ll.tail.value).toEqual('5');
    expect(Ll.toString()).toEqual('{1} -> {2} -> {3} -> {5} -> NULL');
  });

  // ============================================================================================================== //

  test('Where k is greater than the length of the linked list', () => {
    const Ll = new LinkedList();
    Ll.append('1');
    Ll.append('2');
    Ll.append('3');
    expect(Ll.kthFromEnd(5)).toEqual('Exception');
  });

  test('Where k and the length of the list are the same', () => {
    const Ll = new LinkedList();
    Ll.append('1');
    Ll.append('2');
    Ll.append('3');
    expect(Ll.kthFromEnd(2)).toEqual('1');
  });

  test('Where k is not a positive integer', () => {
    const Ll = new LinkedList();
    Ll.append('1');
    Ll.append('2');
    Ll.append('3');
    expect(Ll.kthFromEnd(-1)).toEqual('Exception');
  });

  test('Where the linked list is of a size 1', () => {
    const Ll = new LinkedList();
    Ll.append('1');
    expect(Ll.kthFromEnd(0)).toEqual('1');
  });

  test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    const Ll = new LinkedList();
    Ll.append('1');
    Ll.append('2');
    Ll.append('3');
    Ll.append('4');
    Ll.append('5');
    expect(Ll.kthFromEnd(3)).toEqual('2');
  });

  // ============================================================================================================== //

  test('test zipLists function', () => {
    const Ll = new LinkedList();
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    list1.append('1');
    list1.append('2');
    list1.append('3');
    list2.append('4');
    list2.append('5');
    Ll.zipLists(list1, list2);
    expect(Ll.head.value).toEqual('1');
    expect(Ll.toString()).toEqual('{1} -> {4} -> {2} -> {5} -> {3} -> NULL');
  });

  // ============================================================================================================== //

  test('test palindrome function', () => {
    const Ll = new LinkedList();
    const list = new LinkedList();
    list.append('t');
    list.append('a');
    list.append('c');
    list.append('o');
    list.append('c');
    list.append('a');
    list.append('t');
    expect(Ll.palindrome(list)).toEqual(true);
  });

  test('test palindrome function', () => {
    const Ll = new LinkedList();
    const list = new LinkedList();
    list.append('m');
    list.append('o');
    list.append('o');
    list.append('m');
    expect(Ll.palindrome(list)).toEqual(true);
  });

  test('test palindrome function', () => {
    const Ll = new LinkedList();
    const list = new LinkedList();
    list.append('h');
    list.append('o');
    list.append('u');
    list.append('s');
    list.append('e');
    expect(Ll.palindrome(list)).toEqual(false);
  });

  // ============================================================================================================== //

  test('test palindrome function', () => {
    const Ll = new LinkedList();
    const list = new LinkedList();
    list.append('h');
    list.append('o');
    list.append('u');
    list.append('s');
    list.append('e');
    Ll.reverse(list);
    // expect(Ll.head).toEqual('e');
    expect(Ll.toString()).toEqual('{e} -> {d} -> {c} -> {b} -> {a} -> NULL');
  });

});
