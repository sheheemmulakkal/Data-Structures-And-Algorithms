class MaxHeap {
  constructor() {
    this.arr = [];
  }

  heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      this.heapify(arr, n, largest);
    }
  }

  insert(data) {
    this.arr.push(data);
    let i = this.arr.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.arr[i] <= this.arr[parent]) {
        break;
      }

      [this.arr[i], this.arr[parent]] = [this.arr[parent], this.arr[i]];
      i = parent;
    }
  }

  remove() {
    const n = this.arr.length;
    if (n === 0) {
      return null;
    }
    const max = this.arr[0];
    this.arr[0] = this.arr[n - 1];
    this.arr.pop();
    this.heapify(this.arr, n - 1, 0);
  }

  get() {
    return this.arr;
  }

  heapSort() {
    const n = this.arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.heapify(this.arr, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
      let temp = this.arr[0];
      this.arr[0] = this.arr[i];
      this.arr[i] = temp;
      this.heapify(this.arr, i, 0);
    }
    return this.arr;
  }
}

const heap = new MaxHeap();
heap.insert(2);
heap.insert(23);
heap.insert(34);
heap.insert(1);
heap.insert(5);
heap.remove();
console.log(heap.get());
console.log(heap.heapSort());
