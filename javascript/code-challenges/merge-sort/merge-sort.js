'use strict';

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  let k = 0;
  let arr = [];
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
  return arr;
}

module.exports.mergeSort = mergeSort;
