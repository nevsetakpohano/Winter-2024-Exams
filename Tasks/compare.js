// Compare two dictionaries

"use strict";
let compareTwoDictionaries = (firstValues, secondValues) => {
  const arrOfFirstKeys = Object.keys(firstValues);
  const arrOfSecondKeys = Object.keys(secondValues);
  let boolFlag = true;
  if (arrOfFirstKeys.join("-") !== arrOfSecondKeys.join("-")) return false;
  for (const element of arrOfFirstKeys) {
    if (firstValues[element] === secondValues[element]) {
      boolFlag = boolFlag && true;
    } else {
      boolFlag = boolFlag && false;
    }
  }
  return boolFlag;
};
module.exports = compareTwoDictionaries;
