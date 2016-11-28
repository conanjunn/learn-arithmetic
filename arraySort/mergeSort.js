'use strict';

const array = [44, 22, 1, 3, 0, 55, 2, 10];

const merge = (arr, l, m, r) => {
  const aux = [];
  for (let i = l; i <= r; i++) {
    aux[i - l] = arr[i];
  }
  // 记录左边一半的index
  let li = l;
  // 记录右边一半的index
  let ri = m + 1;
  for (let i = l; i <= r; i++) {
    if (li > m) {
      // 左边已经到头，直接取右边的值
      arr[i] = aux[ri - l];
      ri++;
    } else if (ri > r) {
      // 右边到头，取左边的值
      arr[i] = aux[li - l];
      li++;
    } else if (aux[li - l] < aux[ri - l]) {
      arr[i] = aux[li - l];
      li++;
    } else {
      arr[i] = aux[ri - l];
      ri++;
    }
  }
};

const split = (arr, left, right) => {
  if (left >= right) {
    return arr;
  }
  let middle = (left + right) / 2;
  middle = parseInt(middle);
  split(arr, left, middle);
  split(arr, middle + 1, right);
  if (arr[middle] > arr[middle + 1]) {
    merge(arr, left, middle, right);
  }
  return arr;
};

const mergeSort = (arr) => {
  split(arr, 0, arr.length - 1);
};

mergeSort(array);

console.log(array);

