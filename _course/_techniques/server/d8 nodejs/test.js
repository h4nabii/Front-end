let fs = require("fs");

// fs.mkdir("mk", () => {
//     console.log("mk");
// });

let {num} = require("./myModule");

console.log(num);

console.log(__filename);
console.log(__dirname);
let reg;
console.log(__filename.match(reg = new RegExp("(?<=" + __dirname.replaceAll("\\", "\\\\") + "\\\\)\\S*"))[0]);
console.log(reg);

console.log(global.process.argv);

console.log(Buffer);
