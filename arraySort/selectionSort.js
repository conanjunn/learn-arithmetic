'use strict'

const _ = require('./utils');

const arr = [3, 4, 11, 44, 22, 1, 5, 55];

const sort = (arr) => {
  const len = arr.length;
  _.forEach(arr, (value, index) => {
    let minIndex = index;
    _.forEach(arr, (valueInner, indexInner) => {
      if (arr[indexInner] < arr[minIndex]) {
        minIndex = indexInner;
      }
    }, { begin: index + 1 });
    _.swap(arr, index, minIndex);
  });
  return arr;
};

sort(arr);
console.log(arr);

