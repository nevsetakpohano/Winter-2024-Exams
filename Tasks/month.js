// Get month number

'use strict'
const arrMonths = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

const month = (nameOfMonth) => {

  for (let i = 0; i < arrMonths.length; i++) {
    if (nameOfMonth.toLowerCase().startsWith(arrMonths[i])) {
      return i + 1;
    }
  }
  return -1;
  
};
module.exports = month;

module.exports = month;
