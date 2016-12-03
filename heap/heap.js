'use strict';

module.exports = (data) => {
  const heap = [];
  let count = 0;

  const swap = (arr, index1, index2) => {
    const tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  };

  const shiftUp = (index) => {
    if (index < 2) {
      return false;
    }
    const parentIndex = parseInt(index / 2);
    if (heap[parentIndex] < heap[index]) {
      swap(heap, parentIndex, index);
      shiftUp(parentIndex);
    }
  };

  const shiftDown = () => {
    
  };

  const insert = (value) => {
    count++;
    heap[count] = value;
    shiftUp(count);
  };


  const getAll = () => {
    return heap;
  };

  return { getAll, insert };
};

