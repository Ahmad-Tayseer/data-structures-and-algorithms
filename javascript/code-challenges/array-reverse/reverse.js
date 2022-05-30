'use strict';

const reverseArray = (arr) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[arr.length - 1 - i]);
  }
  return array;
};

console.log(reverseArray([1, 2, 3, 4, 5, 6]));
