// Split an array into two parts

'use strict'
const splitArray = (index, array) => {
  return [array.slice(0, index), array.slice(index, array.length)];
};

module.exports = splitArray;
