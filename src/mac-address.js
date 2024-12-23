const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let macArr = String(n).split('-');
  let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  
  if (macArr.length !== 6) {
    return false;
  }

  for (let item of macArr) {
    if (item.length !== 2 || !digits.includes(item[0]) || !digits.includes(item[1])) {
      return false;
    }
  }

  return true;

  // let results =  macArr.map((item) => {
  //   if (item.length !== 2 || !digits.includes(item[0]) || !digits.includes(item[1])) {
  //     return false;
  //   }
  //   return true;
  // })

  // return !results.includes(false)
}
module.exports = {
  isMAC48Address
};
