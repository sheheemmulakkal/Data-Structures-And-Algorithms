function BinarySearch(arr, value, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;
  const middleIndex = Math.floor(arr.length / 2);
  if (arr[middleIndex] === value) return middleIndex;
  if (value < arr[middleIndex])
    return BinarySearch(arr, value, leftIndex, middleIndex - 1);
  return BinarySearch(arr, value, middleIndex + 1, rightIndex);
}
