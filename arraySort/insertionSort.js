'use strict';

const { forEach, forEachRight, swap } = require('./utils');

const arr = [3, 4, 11, 44, 22, 1, 5, 55];

const insertionSort1 = () => {
  forEach(arr, (value, index) => {
    forEachRight(arr, (val, i) => {
      if (arr[i] < arr[i - 1]) {
        swap(arr, i - 1, i);
      } else {
        return false;
      }
    }, { begin: index, end: 1 });
  }, { begin: 1 }); // 从第一个开始循环
};

// 优化
const insertionSort2 = () => {
  forEach(arr, (value, index) => {
    forEachRight(arr, (val, i) => {
      if (value < arr[i - 1]) {
        arr[i] = arr[i - 1];
        if (i === 1) {
          arr[0] = value;
        }
      } else {
        arr[i] = value;
        return false;
      }
    }, { begin: index, end: 1 });
  }, { begin: 1 });
};

insertionSort2(arr);

console.log(arr);


// 无函数版
const arr = [34, 1, 22, 4, 6, 33, 99, 0];

for (let i = 1; i < arr.length; i++) {
  const tmp = arr[i];
  let j = null;
  for (j = i - 1; j >= 0; j--) {
    if (tmp < arr[j]) {
      arr[j + 1] = arr[j];
    } else {
      break;
    }
  }
  arr[j + 1] = tmp;
}

console.log(arr);

