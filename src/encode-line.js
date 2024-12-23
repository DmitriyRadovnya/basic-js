const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let array = str.split('');
  let count = 1;
  return array.reduce((encodeStr, letter, index) => {
    if (letter === array[index - 1]) {
      return encodeStr;
    }
    
    for (let i = index; letter === array[i + 1]; i++) {
      count++;
    }

    if (count === 1) {
      encodeStr += letter;
    } else {
      encodeStr += count + letter;
    }

    count = 1;
    return encodeStr;
  },'')
}

module.exports = {
  encodeLine
};
