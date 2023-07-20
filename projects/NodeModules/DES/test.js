let Binaries = require("./Binaries.js");
let DES = require("./DES.js");

let plain = "The highest biding price is 406714 NS$";
// let plain = "The hig";
let binaries = Binaries.from(plain);

let cipherHex = "";
let keyHex = "";
binaries.forEach(binary => {
    console.log(`plain   : ${Binaries.binaryToHex(binary)}`);
    let [cipher, key] = DES.encryptBinary(binary);
    let decrypt = DES.decryptBinary(cipher, key);
    // console.log("binary  :", binary.join(""));
    // console.log("cipher  :", cipher.join(""));
    // console.log("key     :", key.join(""), key.length);
    // console.log("decrypt :", decrypt.join(""));
    // console.log(`cipher  : ${cipher.join("")}, key: ${key.join("")}, decrypt: ${decrypt.join("") === binary.join("")}`);
    console.log(`cipher  : ${Binaries.binaryToHex(cipher)}, key: ${Binaries.binaryToHex(key, 56)}, decrypt: ${decrypt.join("") === binary.join("")}`);

    cipherHex += Binaries.binaryToHex(cipher);
    keyHex += Binaries.binaryToHex(key, 56);
});
console.log();
console.log("CIPHER  :", cipherHex);
console.log("KEY     :", keyHex);
console.log();

let decryptedBinaries = [];
for (let i = 0; i < cipherHex.length / 16; i++) {
    let cipherStr = cipherHex.substring(i * 16, i * 16 + 16);
    let keyStr = keyHex.substring(i * 14, i * 14 + 14);
    let cipherBinary = Binaries.hexToBinary(cipherStr);
    let keyBinary = Binaries.hexToBinary(keyStr);

    console.log("extracted cipher", cipherStr, "and key", keyStr);
    // console.log("cipher  :", cipherBinary.join(""), cipherBinary.length);
    // console.log("key     :", keyBinary.join(""), keyBinary.length);
    let plain = DES.decryptBinary(cipherBinary, keyBinary);
    // console.log("binary  :", plain.join(""));
    console.log(`plain   : ${Binaries.binaryToHex(plain)}`);
    decryptedBinaries.push(plain);
}

console.log("\nDecrypted Text:");
console.log(Binaries.merge(decryptedBinaries));
