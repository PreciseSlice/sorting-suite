// function quickSort (array) {
//   //create the first pivot -- potential refactor
//   var result = [];
//   var firstPivot = array[array.length-1]; //targets last element
//   var bigger = [];
//   var smaller = [];
  
//   for (let i = 0 ; i < array.length - 1 ; i++){
//     if (array[i] > firstPivot){
//       bigger.push(array[i]); //pushes bigger nums to an array
//     } else {
//       smaller.push(array[i]); //pushes smaller nums to an array
//     }
//   }
  
//   result.push(smaller, firstPivot, bigger); //creates a result array w/ smaller array/pivot/bigger array in order

//   function iterateSort (subArray){ //passes in result array to function which is called recursively
//     var resultUpdate = [];
//     for (let j = 0 ; j < subArray.length ; j++){ //iterates through the subarray
//       if (typeof subArray[j] === 'object' && subArray[j].length > 1){ //checks that whether a position is an array longer than 1 entry - if so it will run the division operation again 
//         var firstP = subArray[j][subArray[j].length-1];
//         var iBig = [];
//         var iSmall = [];
//         for (let i = 0 ; i < subArray[j].length - 1 ; i++){
//           if (subArray[j][i] > firstP){
//             iBig.push(subArray[j][i]);
//           } else {
//             iSmall.push(subArray[j][i]);
//           }
//         }
//         if (iBig.length === 1){ //if array is just one entry pushes just the entry as opposed to the array
//           iBig = iBig[0];
//         }
//         if (iSmall.length ===1){ //same thang here
//           iSmall = iSmall[0];
//         }
        
//         if (iBig.length === 0){ // if iBig is an empty array does not add to result
//           resultUpdate.push(iSmall,firstP);
//         } else if (iSmall.length === 0){ //if iSmall is an empty array does not add to result
//           resultUpdate.push(firstP,iBig);
//         } else { //every other case it adds all 3 things
//         resultUpdate.push(iSmall,firstP,iBig);
//         }
        
//       }else if (subArray[j].length === 1){ //pushes each individual array  POS  if array is empty
//         resultUpdate.push(subArray[j][0]);
//       } else if (subArray[j].length === 0){ //does not push array if it's empty
        
//       } else{ //otherwise pushes full array
//         resultUpdate.push(subArray[j]);
//       }
//     }
//     result = resultUpdate;
    
//     if (result.length < array.length){
//       return iterateSort(result); //decides if it should run it again (shorter as in doesn't have all entries from original array sorted)
//     } else {
//       return result; //returns result when it is the correct length
//     }
//   }
  
//   return iterateSort(result);
// }

function quickSort(array) {
 if (array.length <= 1) {
    console.log('basecase');
    return array;
  }
  let result = [];
  const pivot = array.shift(); //pivot is first elem in array
  console.log('pivot: ' + pivot);
  console.log('array: ' + array);
  let lesserArray = [];
  let greaterArray = [];
  while (array.length) {
    if (array[0] >= pivot) {
      greaterArray.push(array.shift());
      console.log('greater: ' + greaterArray);
    } else {
      lesserArray.push(array.shift());
      console.log('lesser: ' + lesserArray);
    }
  }
  return reJoin(pivot, quickSort(lesserArray), quickSort(greaterArray));
  
}
function reJoin(pivot, lesserArray, greaterArray) {
  console.log('reJoin');
  return [...lesserArray, pivot, ...greaterArray];
  
}
console.log(quickSort([2, 1, 3, 8, 9, 40]));

module.exports = quickSort;