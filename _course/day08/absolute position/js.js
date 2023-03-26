document.getElementById("rotate-btn-left").addEventListener("click", () => {
    let left = document.getElementById("slide").style.left;
    if (!left) left = 0;
    else left = Number(left.substring(0, left.length - 2));
    left = left + 236;
    setTimeout(() => document.getElementById("slide").style.left = left + "px", 0)
})

document.getElementById("rotate-btn-right").addEventListener("click", () => {
    let left = document.getElementById("slide").style.left;
    if (!left) left = 0;
    else left = Number(left.substring(0, left.length - 2));
    left = left - 236;
    setTimeout(() => document.getElementById("slide").style.left = left + "px", 0)
})

document.onload = () => {
    console.log(1)
    let count = document.getElementById("slide").children.length;

    console.log(count);
}

