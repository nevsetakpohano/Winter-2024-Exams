// Find an intersection of two dictionaries

intersectionOfTwoDictionaries = function intersectionOfTwoDictionaries(firstObject, secondObject) {
  keys = Object.keys(firstObject);
  for (attribute_name of keys) {
    if (firstObject[attribute_name] === secondObject[attribute_name]) {
      secondObject[attribute_name] = firstObject[attribute_name];
      {
      }
    } else {
      delete firstObject[attribute_name];
    }
  }
  return firstObject;
};

module.exports = intersectionOfTwoDictionaries;
