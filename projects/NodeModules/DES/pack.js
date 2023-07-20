let DES = require("./DES");
let Binaries = require("./Binaries");

function pack(str) {
    let binaries = Binaries.from(str);
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
    encrypt: pack,
    decrypt
};
