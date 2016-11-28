'use strict';

const { swap } = require('./utils');

const array = [3, 5, 1, 2, 3, 11, 55, 33, 111, 0];

const partition = (arr, l, r) => {
  const base = arr[l];
  let p = l;
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < base) {
      p++;
      swap(arr, p, i);
    }
  }
  swap(arr, l, p);
  return p;
};

const quickSort = (arr, l, r) => {
  if (l >= r) {
    return null;
  }
  const p = partition(arr, l, r);
  quickSort(arr, l, p - 1);
  quickSort(arr, p + 1, r);
};

const sort = (arr) => {
  quickSort(arr, 0, arr.length - 1);
};

sort(array);

console.log(array);

