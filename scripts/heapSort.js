// let parent = Math.floor((i-1) / 2);
// let leftChild = 2 * i + 1;
// let rightChild = 2 * i + 2;

const arr = [ 1, 2, 3, 4, 5, 6 ];

const index = Math.floor(arr.length / 2);

function heapify(arr) {

  for (var i = Math.floor(arr.length / 2); i >= 0; i --) {
    let leftChild = i * 2 + 1;
    let rightChild = i * 2 + 2;
    let parent = arr[i];
    let temp = 0;
    console.log(parent);
    if ( parent < arr[leftChild] ) {
      console.log('greater-left');
    }
    
    if ( parent < arr[rightChild] ) {
      console.log('greater-right');
    }
    console.log('-------------------');
  }
  return arr; 
}

heapify(arr);

//test = heapify(arr);

//console.log(test);
