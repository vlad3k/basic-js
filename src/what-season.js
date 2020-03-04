module.exports = function getSeason(date) {
  if(date === undefined){
    return "Unable to determine the time of year!"
  }

  if (!isValidDate(date)) throw Error;

  return getMonthByNumber(date.getMonth());
};

function getMonthByNumber(num) {
  switch (num) {
    case 0:
    case 1:
    case 11:
      return 'winter';
      break;

    case 2:
    case 3:
    case 4:
      return 'spring';
      break;

    case 5:
    case 6:
    case 7:
      return 'summer';

    default:
      return 'autumn';
  }
}

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}
