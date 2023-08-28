const dom = {
    audio: document.querySelector("audio"),
    ul: document.querySelector("ul"),
    container: document.querySelector(".container"),
};

function parseLrc() {
    let pData = [];
    for (let i = 0; i < data.length; i++) {
        let [time, words] = data[i].split("]");
        time = time.substring(1);
        pData[i] = {
            time: parseTime(time),
            words,
        };
    }
    return pData;
}

function parseTime(timeStr) {
    let [m, s, i] = timeStr.split(":");
    return m * 60 + s * 10 + i * 2;
}

function findIndex() {
    let time = dom.audio.currentTime;
    let i = 0;
    while (pData[i]?.time < time) i++;
    return i - 1;
}

function createLrcElement() {
    for (let i = 0; i < pData.length; i++) {
        let li = document.createElement("li");
        li.textContent = pData[i].words;
        dom.ul.appendChild(li);
    }
}

// function createLrcElement() {
//     let frag = document.createDocumentFragment();
//     for (let i = 0; i < pData.length; i++) {
//         let li = document.createElement("li");
//         li.textContent = pData[i].words;
//         frag.appendChild(li)
//     }
//     dom.ul.appendChild(frag);
// }


// load data
let pData = parseLrc();
createLrcElement();

const containerHeight = dom.container.clientHeight;
const liHeight = dom.ul.children[0].clientHeight;
const maxOffset = dom.ul.clientHeight - containerHeight / 2;

function setOffset() {
    let index = findIndex();
    let offset = (index + 0.5) * liHeight - containerHeight / 2;
    if (offset < 0) offset = 0;
    if (offset > maxOffset) offset = maxOffset;
    document.querySelector("li.active")?.classList.remove("active");
    dom.ul.children[index]?.classList.add("active");
    dom.ul.style.transform = `translateY(${-offset}px)`;
}

console.log(pData);

dom.audio.ontimeupdate = setOffset;








