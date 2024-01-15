// Return an array with duplicates

arrWithDuplicates = (value, size) => {
  if (size <= 0) {
    return [];
  } else {
    const newArr = Array.from({ length: size }, () => value);
    return newArr;
  }
};

module.exports = arrWithDuplicates;
