'use strict';
const LinkedList = require('../lib/linked-list');

describe('Linked-Lists Tests',()=>{
  test('Can successfully instantiate an empty linked list?', () => {
    const ll = new LinkedList ();
    expect(ll.head).toBeNull();
  });
  test('Can properly insert into the linked list (empty linked list)?', () => {
    const ll = new LinkedList();
    ll.insert('Ahmad');
    expect(ll.head.value).toEqual('Ahmad');
    expect(ll.head.next).toBeNull();
    expect(ll.length).toEqual(1);
  });
  test('Can properly insert into the linked list (not empty linked list)?', () => {
    const ll = new LinkedList();
    ll.insert('Ahmad');
    ll.insert('Tayseer');
    expect(ll.head.value).toEqual('Tayseer');
    expect(ll.head.next.value).toEqual('Ahmad');
    expect(ll.head.next.next).toBeNull();
  });
  test('The head property will properly point to the first node in the linked list?', () => {
    const ll = new LinkedList();
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });
  test('Can properly insert multiple nodes into the linked list?', () => {
    const ll = new LinkedList();
    ll.insert('Ahmad');
    ll.insert('Tayseer');
    ll.insert('Zabin');
    expect(ll.head.value).toEqual('Zabin');
    expect(ll.head.next.value).toEqual('Tayseer');
    expect(ll.head.next.next.value).toEqual('Ahmad');
    expect(ll.length).toEqual(3);
  });
  test('Will return true when finding a value within the linked list that exists?', () => {
    const ll = new LinkedList();
    ll.insert('Ahmad');
    ll.insert('Tayseer');
    ll.insert('Zabin');
    expect(ll.includes('Zabin')).toEqual(true);
  });
  test('Will return false when searching for a value in the linked list that does not exist?', () => {
    const ll = new LinkedList();
    ll.insert('Ahmad');
    ll.insert('Tayseer');
    ll.insert('Zabin');
    expect(ll.includes('Mohammad')).toEqual(false);
  });
  test('Can properly return a collection of all the values that exist in the linked list?', () => {
    const ll = new LinkedList();
    ll.insert('Ahmad');
    ll.insert('Tayseer');
    ll.insert('Zabin');
    expect(ll.toString()).toEqual('{ Zabin } -> { Tayseer } -> { Ahmad } -> NULL');
  });
  test('append to linklist works', () => {
    let list = new LinkedList();
    list.append('ONE');
    expect(list.head.value).toEqual('ONE');
    list.append('THREE');
    expect(list.head.value).toEqual('ONE');
    list.append(7);
    list.append(8);
    expect(list.head.value).toEqual('ONE');
  });
});

it('Where k is greater than the length of the linked list',()=>{
  const ll=new LinkedList();
  ll.append('Ahmad');
  expect(ll.kthFormEnd(2)).toEqual('Exception');
});

it('Where k and the length of the list are the same',()=>{
  const ll=new LinkedList();
  ll.append('Ahmad');
  ll.append('Tayseer');
  expect(ll.kthFormEnd(1)).toEqual('Ahmad');
});

it('Where k is not a positive integer',()=>{
  const ll=new LinkedList();
  ll.append('Ahmad');
  expect(ll.kthFormEnd(-1)).toEqual('Exception');
});

it('Where the linked list is of a size 1',()=>{
  const ll=new LinkedList();
  ll.append('Ahmad');
  expect(ll.kthFormEnd(0)).toEqual('Ahmad');
});

it('Happy Path” where k is not at the end, but somewhere in the middle of the linked list',()=>{
  const ll=new LinkedList();
  ll.append('Ahmad');
  ll.append('Tayseer');
  ll.append('Mohammad');
  ll.append('Zabin');
  ll.append('Mailesh');
  expect(ll.kthFormEnd(3)).toEqual('Tayseer');
});
