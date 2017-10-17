const numbers = [5, 4, 3, 2, 1];

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++){
    for (let j = i - 1; j >= 0; j--){
      console.log(array);
      if (array[j + 1] < array[j]){
        [ array[j + 1], array[j] ] = [ array[j], array[j + 1] ];
      }
    }
  }
  return array;
};

insertionSort(numbers);

module.exports = InsertionSort; 