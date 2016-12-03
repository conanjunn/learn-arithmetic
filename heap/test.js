const Heap = require('./heap');

const heap = Heap();
heap.insert(1);
heap.insert(11);
heap.insert(34);
heap.insert(4);
heap.insert(34);
heap.insert(341);
heap.insert(344);
heap.insert(0);
heap.insert(88);
heap.insert(15);

console.log(heap.getAll());

