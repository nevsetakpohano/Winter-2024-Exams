// Find an intersection of two dictionaries

function intersectionOfTwoDictionaries(firstObject, secondObject) {
  keys = Object.keys(firstObject);
  for (element of keys) {
    if (firstObject[element] != secondObject[element]) {
      delete firstObject[element];
  }
}
return firstObject;
};

module.exports = intersectionOfTwoDictionaries;
