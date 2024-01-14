// Compare two dictionaries

let compareTwoDictionaries = (first_values, ...parameters_LIST) => {
  const second_values = parameters_LIST[0];
  let arrOfFirstKeys = Object.keys(first_values);
  let arrOfSecondKeys = Object.keys(second_values);
  if (arrOfFirstKeys.join('-') !== arrOfSecondKeys.join('-')) return false;
  let boolFlag = true;
  for (element of arrOfFirstKeys) {
    if (first_values[element] === second_values[element]) boolFlag = boolFlag && true;
    else {
      boolFlag = boolFlag && false;
    }
  }
  return boolFlag;
};

module.exports = compareTwoDictionaries;
