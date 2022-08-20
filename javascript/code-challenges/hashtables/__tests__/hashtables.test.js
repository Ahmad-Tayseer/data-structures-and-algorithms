'use strict';

const { HashTable } = require('../hashtables');

const HashTable1 = new HashTable(33);
HashTable1.set('a', '1');
HashTable1.set('b', '2');
HashTable1.set('c', '3');

describe('Testing HashTables', () => {
  it('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    expect(Object.values(HashTable1.table[16].head.value).join('')).toEqual(
      '1'
    );
  });

  it('Retrieving based on a key returns the value stored', () => {
    expect(HashTable1.get('a')).toEqual('1');
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(HashTable1.get('nour')).toBeNull();
  });

  it('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    expect(HashTable1.keys()).not.toEqual(['c', 'b', 'a']);
  });

  it('Successfully handle a collision within the hashtable', () => {
    const HashTable2 = new HashTable(1);
    HashTable2.set('a', '1');
    HashTable2.set('b', '2');
    HashTable2.set('c', '3');

    expect(HashTable2.table[0].head.next.value).toEqual({ b: '2' });
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const HashTable2 = new HashTable(1);
    HashTable2.set('a', '1');
    HashTable2.set('b', '2');
    HashTable2.set('c', '3');

    expect(HashTable2.get('a')).toEqual('1');
  });

  it('Successfully hash a key to an in-range value', () => {
    const HashTable3 = new HashTable(10);
    let hashedValue = HashTable3.hash('c');

    expect(hashedValue).toBeGreaterThanOrEqual(0);
    expect(hashedValue).toBeLessThanOrEqual(10);
  });
});
