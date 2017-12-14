const arr = [ 5, 2, 3, 7 ];

let lastIndex = arr.length - 1;

function heapify(arr, lastIndex) {
  
  for (let i = Math.floor(arr.length / 2); i >= 0; i --) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    
    if (arr[i] < arr[left]) {
      [arr[i], arr[left]] = [arr[left], arr[i]];
    }
    
    if (arr[i] < arr[right]) {
      [arr[i], arr[right]] = [arr[right], arr[i]];
    }
    
  }
  
  return arr; 
}

function heapSort (arr, lastIndex) {

  while (lastIndex > 0) {
    [arr[0], arr[lastIndex]] = [arr[lastIndex], arr[0]];
    lastIndex --;
    heapify(arr, lastIndex);
  }

  return arr;

}


test = heapSort(arr, lastIndex);

console.log(test);