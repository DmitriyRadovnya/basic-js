const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let maxStr = null;
  let minStr = null;
  if (s1.length < s2.length) {
    minStr = s1;
    maxStr = s2;
  } else {
    minStr = s2;
    maxStr = s1;
  }

  let index = 0

  for(let i = 0; i < minStr.length; i++) {
    if (i > 0) {
      minStr = minStr.replace(minStr[i - 1], '-');
    }
    if (maxStr.includes(minStr[i])) {
      index = maxStr.indexOf(minStr[i]);
      maxStr = maxStr.replace(maxStr[index], '');
      minStr = minStr.replace(minStr[i], '-');
      count++;
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
