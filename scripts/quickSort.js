const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const left = [];
  const right = [];
  const pivot = array[array.length -1];
  for (let i = 0; i < array.length -1; i++) {
    if (pivot > array[i]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

module.exports = quickSort;