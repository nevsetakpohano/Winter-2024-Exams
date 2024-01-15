// Find an intersection of two dictionaries
'use strict'
function intersectionOfTwoDictionaries(firstObject, secondObject) {
  const keys = Object.keys(firstObject);
  for (const element of keys) {
    if (firstObject[element] != secondObject[element]) {
      delete firstObject[element];
  }
}
return firstObject;
};
module.exports = intersectionOfTwoDictionaries;
