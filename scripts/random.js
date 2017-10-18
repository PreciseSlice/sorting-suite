const  createArray = () => {
  const lowerLimValue = 1;
  const upperLimValue = 100;
  const arraySizeValue = 10;
  const resultArray = [];
  for (let i = 0 ; i < arraySizeValue; i++){
    let random = Math.floor(Math.random()*(upperLimValue-lowerLimValue) + lowerLimValue);
    resultArray.push(random);
  }
};

module.exports = createArray;