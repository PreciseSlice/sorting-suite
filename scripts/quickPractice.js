// const quickSort = (array) => {
// 	if(array.length <= 1){
// 		return array;
// 	}
// 	const left = [];
// 	const  right = [];
// 	const pivot = array[array.length -1];
// 	for (let i = 0; i < array.length; i++) {
// 		if(array [i] < pivot) {
// 			left.push(array[i]);
// 		} else {
// 			right.push(array[i]);
// 		}
// 	}
// 	return [...quickSort(left), pivot, ...quickSort(right)];
// }; 

// set up base case 

//	set up left and right empty arrays

//	get pivot 

//	loop thorugh arrays 

//  if number being compared is less than pivot push
//  left, else push right 

//	pivot has now been sorted 

// call recusion 

// const quickSort = (array) => {
// 	if (array.length <= 1) {
// 		return array;
// 	}

// 	const left = [];
// 	const right = [];
// 	const pivot = array[length -1];
// 	for (var i = 0; i < array.length -1; i++) {
// 		if (array [i] < pivot) {
// 			left.push(array[i]);
// 		} else {
// 			right.push(array[i]);
// 		}
// 	}
//   return [...quickSort(left), pivot, ...quickSort(right)];
// };

// set up base case

// set up left and right arrays

// get pivot  

// loop through arrays

// if the number being compared is less than pivot push left
//else push right 

// pivot has now been sorted 

// call recursion 

// const quickSort = array => {
// 	if (array.length <= 1) {
// 		return array;
// 	}
// 	const left = [];
// 	const right = [];
// 	const pivot = [array.length -1];
// 		for (let i = 0; i < array.length -1; i++) {
// 			if (array[i] < pivot) {
// 				left.push(array[i]);
// 			} else {
// 				right.push(array[i]);
// 			}
// 		}
// 	return [...quickSort(left), pivot, ... quickSort(right)];
// };

// set up base case 
// const quickSort = array => {
// 	if (array,length <= 1) {
// 		return array; 
// 	}
// // set up left and right array 
// const left = [];
// const right = [];
// //set up pivot 
// const pivot = [array.length -1];
// // loop through arrays
// for (let i = 0; i < array.length -1; i++) {
// 	//if number being compared is less then push left
// 	if (array[i] < pivot) {
// 		left.push(array[i]);
// 	//else push right	
// 	} else {
// 		right.push(array[i]);
// 	}
// }
// //call recursion 
// 	return [...quickSort(left), pivot, ...quickSort(right)];
// };

// set up base case

// set up left and right array 

// set up pivot 

// loop through arrays 

// if number being compared is less than push left

// else push right

// call recusion 

// const quickSort = array => {
// 	if (array.length <= 1) {
// 		return array;
// 	} 
// 	const left = [];
// 	const right = [];
// 	const	pivot = array[array.length -1];
// for (let i = 0; i < array.length -1; i++) {
// 	if (array[i] < pivot) {
// 		left.push(array[i]);
// 		} else {
// 		right.push(array[i]);
// 		}
// 	}
// 	return [...quickSort(left), pivot, ... quickSort(right)];
// }; 


// set up base case 

// set up left and right array 

// set up pivot 

// loop through arrays 

// if number being compared is less than push left 

// else push right

// call recursion 


// const quickSort = array => {
// 	if (array.length <= 1) {
// 		return array;
// 	}
// 	const	left = [];
// 	const right = [];
// 	const pivot = array[array.length -1];
// 	for (let i = 0; i < array.length -1; i++) {
// 		if (arrays[i] < pivot){
// 			left.push(array[i]);
// 		} else {
// 			right.push(array[i]);
// 		}
// 	}
// 	return [...quickSort(left), pivot, ...quickSort(right)];
// };

// set up base case 

// set up left array 

// set up right array 

// set up pivot

// loop through arrays 

// if number being compared is less push left

// else push right 

// call recursion 

// const quickSort = array => {
// 	if (array.length <= 1) {
// 		return array;
// 	}

// 	const left = [];
// 	const right = [];
// 	const pivot = array[array.lenght -1];

// 	for (let i = 0; i < array.length -1; i++) {
// 		if (array[i] < pivot) {
// 			left.push(array[i]);
// 		} else {
// 			right.push(array[i]);
// 		}
// 	}
// 	return [...quickSort(left), pivot, ...quickSort(right)];
// }; 


// create function

// set up base case 

// set up empty arrays for left and righ 

// set up pivot 

// loop through arrays 

// if pivot is great than array at the index of i push left

// else push right 

// set up recusion on left and right arrays 


// const quickSort = array => {
// 	if (array.length <= 1) {
// 		return array;
// 	}

// 	const left = [];
// 	const right = [];
// 	const pivot =  array[array.length -1];

// 	for (let i = 0; i < array.length -1; i++) {
// 		if (pivot > array[i]) {
// 			left.push(array[i]);
// 		} else {
// 			right.push(array[i]);
// 		}
// 	}
// return[...quickSort(left), pivot, ... quickSort(right)];
// };

// set up function 

// set up base case if the length of the array us less than or eqaul to one

// set up empty arrays for the left and right 

// set upp the pivot 

// loop though arrays 

// if pivot id great than array item push left 

// else push right 

// recusivly call function on arrays 

// const quickSort = array => {
// 	if (array.length <= 1) {
// 		return array;
// 	}

// 	const	left = [];
// 	const	right = [];
// 	const pivot = array[array.length - 1];

// 	for(let i = 0; i < array.length -1; i++){
// 		if (pivot > array[i]) {
// 			left.push(array[i]);
// 		} else {
// 			right.push(array[i]); 
// 		}
// 	}
// 	return[...quickSort(left), pivot, ...quickSort(right)];
// };

// set up function

// set up a base case 

// create arrays for left and right 

// create a pivot array 

// loop through array 

// i pivot is greater than array at i push i into left

// else push right 

// set up recursion 


// const quickSort = array => {
// 	if (array.length <= 1) {
// 		return array;
// 	}

// 	const left = [];
// 	const right	= [];
// 	const pivot = array[array.length -1];

// 	for(let i = 1; i < array.length -1; i ++) {
// 		if (pivot > array.length[i]) {
// 			left.push(array[i]);
// 		} else {
// 			right.push(array[i]);
// 		}
// 	}
// 	return [...quickSort(length), pivot, ...quickSort(right)];
// };


// set up function 

// set up base case 

// set up emty arrays to host left and right sorted items 

// loop through items

// if pivot is gret than array at i push i left 

// else push right

// set up recursion  

const quickSort = array => {
	if (array.length <= 1) {
		return array;
	}

	const left = [];
	const right	= [];
	const pivot = array[array.length -1];

	for(let i = 0; i < array.length -1; i++);
		if (pivot > array[i]) {
			left.push(array[i]);
		} else {
			right.push(array[i]);
		}
return [...quickSort(left), pivot, ...quickSort(right)];
};
































































