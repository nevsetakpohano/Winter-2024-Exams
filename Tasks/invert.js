// Reverse an array, you can't use .reverse()

invert = (A) => {
  T = [];
  for(let i=0; i < A.length; i++){
    T.unshift(A[i]);
  }
  return T;
};

module.exports = invert;
