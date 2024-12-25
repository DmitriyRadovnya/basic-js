const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  
  let str = n.toString()
  if (str.length === 1) {
    return n;
  }

  return str.split('').reduce((nMax, digit, index, allDig) => {
    allDig.splice(index, 1);
    let newNumber = parseInt(allDig.join(''));
    newNumber > nMax ? nMax = newNumber : nMax = nMax;
    allDig.splice(index, 0, digit);
    return nMax;
  }, 0)
}

module.exports = {
  deleteDigit
};
