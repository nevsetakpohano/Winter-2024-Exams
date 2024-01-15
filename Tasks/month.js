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
  l = arrMonths.length;
  for (let i = 0; i < l; i++) {
    if (nameOfMonth.toLowerCase().startsWith(arrMonths[i])) return i + 1;
  }
  return -1;
};

module.exports = month;
