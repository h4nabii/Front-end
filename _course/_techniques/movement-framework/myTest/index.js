let oBox = document.querySelector("#box");
let bottom = -oBox.offsetHeight;
oBox.style.bottom = bottom + "px";
setTimeout(() => {
    let move = setInterval(() => {
        if (bottom < 0) {
            bottom += 5;
            oBox.style.bottom = bottom + "px";
        } else clearInterval(move);
    }, 10);
}, 1000);


