// Get month number

arrMonths = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

month = (nameOfMonth) => {

  for (let i = 0; i < arrMonths.length; i++) {
    if (nameOfMonth.toLowerCase().startsWith(arrMonths[i])) {
      return i + 1;
    }
  }
  return -1;

};

module.exports = month;
