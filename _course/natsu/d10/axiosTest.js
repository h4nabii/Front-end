const axios = require("axios");

function chainAxiosGet3(url1, url2, url3) {

    axios.get(
        url1
    ).then(
        resp1 => {
            console.log("now 1");
            console.log(resp1.data);
            return axios.get(url2);
        },
        err => {
            console.log("now 1 err", err.code);
            return {
                data: "err on 1"
            };
        }
    ).then(
        resp2 => {
            console.log("now 2");
            console.log(resp2.data);
            return axios.get(url3);
        },
        err => {
            console.log("now 2 err", err.code);
            // return {
            //     data: "err on 2"
            // };

            // 这个返回值会让下一个 .then 执行 err 所在函数，输出 now 3 err
            // 并附带上第二次axios的err
            return new Promise((_, rej) => rej(err));
        }
    ).then(
        resp3 => {
            console.log("now 3");
            console.log(resp3.data);
        },
        err => {
            console.log("now 3 err", err.code);
        }
    ).catch(
        reason => {
            console.log("catch err");
            console.log(reason);
        }
    );
}

chainAxiosGet3(
    "http://localhost:5000/",
    "http://localhost:8000/123",
    "http://localhost:5000/"
);

// （async）异步方法一定返回一个 Promise
async function awaitAxiosGet(url1, url2, url3) {
    try {
        let resp1 = await axios.get(url1);
        console.log("await", resp1.data);
        let resp2 = await axios.get(url2);
        console.log("await", resp2.data);
        let resp3 = await axios.get(url3);
        console.log("await", resp3.data);
    } catch (e) {
        throw e;
    }
}

awaitAxiosGet(
    "http://localhost:5000/",
    "http://localhost:8000/123",
    "http://localhost:5000/"
).catch(err => {
    console.log("promise err");
    console.log(typeof err);
});
