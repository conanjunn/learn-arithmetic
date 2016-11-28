'use strict'

const _ = {};

_.identity = (a) => a;

_.noop = () => {};

_.forEach = (arr, iterator, { begin = 0, end = arr.length - 1 } = {}) => {
  for (let i = begin; i <= end; i++) {
    const flag = iterator(arr[i], i, arr);
    if (flag === true) {
      continue;
    } else if (flag === false) {
      break;
    }
  }
};

_.forEachRight = (arr, iterator, { begin = arr.length - 1, end = 0 } = {}) => {
  for (let i = begin; i >= end; i--) {
    const flag = iterator(arr[i], i, arr);
    if (flag === true) {
      continue;
    } else if (flag === false) {
      break;
    }
  }
};

_.map = (arr, iterator) => {
  const newArr = [];
  _.forEach(arr, (value, index) => {
    newArr[index] = iterator(value, index, arr);
  });
  return newArr;
};

_.swap = (arr, index1, index2) => {
  const tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
};

_.clone = arr => {
  return _.map(arr, _.identity);
};

module.exports = _;

