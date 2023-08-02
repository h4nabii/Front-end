import promise_fs from "node:fs/promises";
promise_fs.mkdir("pro_dir").then(
    () => {
        console.log(`successfully created new direction`);
    },
    reason => {
        console.log(reason);
    }
);
