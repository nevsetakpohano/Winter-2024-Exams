// Find an intersection of two dictionaries
"use strict";

function intersectionOfTwoDictionaries(firstObject, secondObject) {
  const result = {};
  const keys = Object.keys(firstObject);

  for (const key of keys) {
    if (
      secondObject.hasOwnProperty(key) &&
      firstObject[key] === secondObject[key]
    ) {
      result[key] = firstObject[key];
    }
  }

  return result;
}

module.exports = intersectionOfTwoDictionaries;
