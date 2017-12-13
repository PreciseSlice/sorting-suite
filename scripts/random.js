const  createArray = (lowerLimValue, upperLimValue, arraySizeValue) => {
  const resultArray = [];
  for (let i = 0 ; i < arraySizeValue; i++){
    let random = Math.floor(Math.random()*(upperLimValue-lowerLimValue) + lowerLimValue);
    resultArray.push(random);
  }
  return resultArray;
};

const checkArray = (sortedArray) => {
	for (let i = 0; i < sortedArray.length; i ++){
		if (sortedArray[i] <= sortedArray[i + 1]) {
			return true;
		} else {
			return false;
		}
	}
};

module.exports = { createArray, checkArray };
