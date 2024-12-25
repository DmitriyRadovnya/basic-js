const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // if(!arr.includes(-1)) {
  //   return arr.sort((a, b) => a - b);
  // }

  let exceptionsIndexes = [];

  arr.forEach((item, index) => {
    if (item === -1) {
      exceptionsIndexes.push(index);
    }
  })

  let cleanArr = arr.filter((item) => item !== -1).sort((a, b) => a - b);

  for(let pushIndex of exceptionsIndexes) {
    cleanArr.splice(pushIndex, 0, -1);
  }

  return cleanArr;
}

module.exports = {
  sortByHeight
};
