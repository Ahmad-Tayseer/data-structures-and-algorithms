'use strict';

const sortInsertion = require('../sorting-insertion');
describe('Test insertion sort', () => {
  it('Can properly sort the array', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let result = sortInsertion.sortInsertion(arr);
    expect(result).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
