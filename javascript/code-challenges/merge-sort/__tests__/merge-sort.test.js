'use strict';
const { mergeSort } = require('../merge-sort');

describe('testing merge sort', () => {
  it('Test merge sort fun.', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let result = mergeSort(arr);
    expect(result).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('Test if array has one element.', () => {
    let arr = [8];
    let result = mergeSort(arr);
    expect(result).toEqual([8]);
  });

});
