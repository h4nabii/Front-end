let fs = require("fs");

let dir = "dir";
fs.mkdir(dir, err => {
    if (err) {
        if (err.code === "EEXIST") {
            console.log("file exists");
            return;
        } else throw err;
    }
    console.log(`successfully created new direction: ${dir}`);
});
