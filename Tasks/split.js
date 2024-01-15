// Split an array into two parts

let splitArray = (index, array) => {
  targetArray = array.slice(0, index);
  const len = array.length;
  restOfTheArray = array.slice(index, len);
  return [targetArray, restOfTheArray];
};

module.exports = splitArray;
