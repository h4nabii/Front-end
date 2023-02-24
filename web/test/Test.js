function testClick() {
    const content_p = document.getElementById("content_p");
    content_p.innerHTML = "Clicked";
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    alert("Warning")
    document.body.append(document.body.lastChild);
}

function startCountDown() {
    let numberElement = document.getElementById("number");
    let msgElement = document.getElementById("msg");

    let intervalID = setInterval(() => {

        let number = Number.parseInt(numberElement.innerHTML);

        numberElement.innerHTML = (--number).toString();

        if (!number) {
            clearInterval(intervalID);
            msgElement.innerHTML = "finished"
        }

    }, 1000);
}


(function (str) {
    console.log(str)
})("immediate func");

console.log("URL Params Split Algorithms")
let getQueryStringArgs = function () {
    let qs = (location.search.length > 0 ? location.search.substring(1) : "");
    let args = {};
    for (let [key, value] of qs.split("&").map(kv => kv.split("=")))
        if (key.length)
            args[key] = value;
    return args;
}
console.log(getQueryStringArgs())

console.log("URLSearchParams object")
let params = new URLSearchParams(location.search);
for (let param of params) {
    console.log(param)
}

// location.assign("https://www.baidu.com")

console.log("Nodes")
for (let children of document.body.children) {
    console.log(children)
}

// getter usage
let randomObj = {
    get val() {
        return Math.floor(Math.random() * 100);
    }
}
let randomList = [];
for (let i = 0; i < 10; i++) {
    randomList.push(randomObj.val)
}
console.log(randomList)

document.addEventListener('keydown', function (event) {
    if (event.code === "ArrowLeft") {
        console.log('Left was pressed');
    } else if (event.code === "ArrowRight") {
        console.log('Right was pressed');
    }
});





