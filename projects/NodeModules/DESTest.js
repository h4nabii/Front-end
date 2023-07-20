let DES = require("./DES");

let [cipher, key] = DES.encrypt("1231512312512412");
console.log(cipher, key);
let plain = DES.decrypt(cipher, key);
console.log(plain);
