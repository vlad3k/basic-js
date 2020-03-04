module.exports = function countCats(arr) {
  return arr.slice().flat().reduce((acc, cat) => cat == '^^' ? acc + 1 : acc, 0);
};
