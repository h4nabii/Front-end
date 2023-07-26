let DES = require("./DES");
let Binaries = require("./Binaries");

/**
 * Encrypt `plaintext` to hex `cipher` and hex `key` by DES algorithm
 * @param {String} plaintext Plaintext
 * @return {[String, String]} Cipher and key
 * @author h4nabii
 */
function encrypt(plaintext) {
    let binaries = Binaries.from(plaintext);
    let ciphers = [], keys = [];
    binaries.forEach((binary32, index) => {
        let [cipher, key] = DES.encryptBinary(binary32);
        ciphers.push(cipher);
        keys.push(key);
    });
    let cipherCode = ciphers.reduce((cipherCode, cipher) => cipherCode + Binaries.binaryToHex(cipher), "");
    let keyCode = keys.reduce((keyCode, key) => keyCode + Binaries.binaryToHex(key, 56), "");

    return [cipherCode, keyCode];
}

/**
 * Decrypt Hex cipher with a Hex key to plain text
 * @param {String} cipher
 * @param {String} key
 * @return {string}
 * @author h4nabii
 */
function decrypt(cipher, key) {
    let decryptedBinaries = [];
    for (let i = 0; i < cipher.length / 16; i++) {
        let cipherStr = cipher.substring(i * 16, i * 16 + 16);
        let keyStr = key.substring(i * 14, i * 14 + 14);
        let cipherBinary = Binaries.hexToBinary(cipherStr);
        let keyBinary = Binaries.hexToBinary(keyStr);

        let plain = DES.decryptBinary(cipherBinary, keyBinary);
        decryptedBinaries.push(plain);
    }
    return Binaries.merge(decryptedBinaries);
}

module.exports = {
    encrypt: encrypt,
    decrypt
};
