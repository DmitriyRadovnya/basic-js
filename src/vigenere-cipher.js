const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  isLetter(symbol) {
    return symbol.toLowerCase() !== symbol.toUpperCase();
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let keyIndex = 0
    let result = [];

    for (let char of message) {
      if(this.isLetter(char)) {
        let mesCharCode = char.charCodeAt(0);
        let keyCharCode = key.charCodeAt(keyIndex % key.length);
        let newCharCode = ((mesCharCode - 65) + (keyCharCode - 65)) % 26 + 65;

        result.push(String.fromCharCode(newCharCode));
        keyIndex++
      } else {
        result.push(char);
      }
    }

    let encryptResult = result.join('');
    return this.direct ? encryptResult : result.reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let keyIndex = 0
    let result = [];

    for (let char of message) {
      if(this.isLetter(char)) {
        let encCharCode = char.charCodeAt(0);
        let keyCharCode = key.charCodeAt(keyIndex % key.length);
        let decryptedCharCode = ((encCharCode - 65) - (keyCharCode - 65) + 26) % 26 + 65;

        result.push(String.fromCharCode(decryptedCharCode));
        keyIndex++;
      } else {
        result.push(char);
      }
    }

    let encryptResult = result.join('');
    return this.direct ? encryptResult : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
