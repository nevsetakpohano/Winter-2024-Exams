// Reverse an array, you can't use .reverse()

'use strict'
const invert = (A) => {
  let T = [];
  for(let i=0; i < A.length; i++){
    T.unshift(A[i]);
  }
  return T;
};
module.exports = invert;
