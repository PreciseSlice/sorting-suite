const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
  	console.log(array);
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }
  console.log(array);
  return array;
};

module.exports = bubbleSort;