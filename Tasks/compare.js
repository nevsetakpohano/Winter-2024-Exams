// Compare two dictionaries

'use strict'
let compareTwoDictionaries = (first_values, second_values) => {
  const arrOfFirstKeys = Object.keys(first_values);
  const arrOfSecondKeys = Object.keys(second_values);
  let boolFlag = true;
  
  if (arrOfFirstKeys.join('-') !== arrOfSecondKeys.join('-')) return false;
  
  for (const element of arrOfFirstKeys) {
    if (first_values[element] === second_values[element]) {
      boolFlag &&= true;
    } else {
      boolFlag &&= false;
    }
  }
  return boolFlag;
};
module.exports = compareTwoDictionaries;
