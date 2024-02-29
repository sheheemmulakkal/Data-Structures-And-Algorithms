const MergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(MergeSort(left), MergeSort(right));
};

const merge = (left, right) => {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
};

console.log(
  MergeSort([5, 1, 4, 25, 8, 4, 2, 5, 4, 2, 5, 8, 5, 2, 5, 4, 5, 5, 58])
);
