'use strict';

const { forEach, swap } = require('./utils');

const arr = [8, 3, 4, 11, 44, 22, 1, 5, 55, 0];

const bubbleSort = (arr) => {
  forEach(arr, (value, index) => {
    forEach(arr, (val, i) => {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }, { end: arr.length - index - 1 });
  }, { begin: 1 });
};

bubbleSort(arr);
console.log(arr);

