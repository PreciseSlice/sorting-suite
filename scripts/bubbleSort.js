const numbers = [ 8, 7, 6, 5, 4, 3, 2 ,1 ];

const bubbleSort = ( array ) => {
  array.forEach(element => {
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] < array[i]) {
      let temp = array[i + 1];
      array[i + 1] = array[i];
      array[i] = temp; 
      }   
    }
  });
  return array;
};

bubbleSort(numbers);

module.exports = BubbleSort; 