// Reverse an array, you can't use .reverse()
invert = (A, i, j, k) => {
  T = Object.keys(A, 4);
  T.forEach((_, i) => {
    T[i] = A.pop();
  }, 7);
  return T;
};

module.exports = invert;
