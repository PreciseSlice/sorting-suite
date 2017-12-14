var arr = [8, 7, 6, 3, 0, 2, 5, -1, 4, 1];
var arrLength = arr.length - 1;

function buildHeap(arr, i) {
  var leftChild = 2 * i + 1;
  var rightChild = 2 * i + 2;
  var max = i;

  if (leftChild < arrLength && arr[leftChild] > arr[max]) {
      max = leftChild;
  }

  if (rightChild < arrLength && arr[rightChild] > arr[max])     {
      max = rightChild;
  }

  if (max != i) {
      var temp = arr[i];

      arr[i] = arr[max];
      arr[max] = temp;
      buildHeap(arr, max);
  }
}

function heapSort(arr) {
  

  for (var i = Math.floor(arrLength / 2); i >= 0; i -= 1) {
      buildHeap(arr, i);
    }

  for (i = arr.length - 1; i > 0; i--) {
      var temp = arr[0];

      arr[0] = arr[i];
      arr[i] = temp;
      arrLength--;
    
      buildHeap(arr, 0);
  }
}


heapSort(arr);
console.log(arr);