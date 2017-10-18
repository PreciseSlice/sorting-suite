const mergeSort = (array) => {
	if (array.length <=1) {
		return array; 
	}
	const midPoint = Math.floor(array.length / 2);
	const a = array.slice(0, midPoint);
	const b = array.slice(midPoint, array.length);
	return merge(mergeSort(a), mergeSort(b));
};