function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    }
  }
  return arr;
}

console.log(bubbleSort([6, 5, 8, 5, 5, 4, 1, 5, 8, 4, 5, 5, 5, 4]));
