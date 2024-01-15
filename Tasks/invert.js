// Reverse an array, you can't use .reverse()

'use strict'
const invert = (givenArr) => {
  let reversedArr = [];
  for(let i=0; i < givenArr.length; i++){
    reversedArr.unshift(givenArr[i]);
  }
  return reversedArr;
};

module.exports = invert;
