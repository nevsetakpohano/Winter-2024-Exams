"use strict";

const getValueBetween = (str, startIndex, endIndex) => {
  if (str.indexOf(startIndex) === -1) return "";
  str = str.substring(str.indexOf(startIndex) + startIndex.length);
  if (endIndex) {
    if (str.indexOf(endIndex) === -1) {
      return "";
    }
    str = str.substring(0, str.indexOf(endIndex));
  }
  return str;
};
module.exports = getValueBetween;
