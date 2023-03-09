let right = document.getElementsByClassName("right");

let list = [
    document.getElementById("left_li_1"),
    document.getElementById("left_li_2"),
    document.getElementById("left_li_3"),
    document.getElementById("left_li_4"),
    document.getElementById("left_li_5")
];

for (let item of list) {
    item.onclick = function () {
        for (let it of list) {
            it.className = "";
        }
        this.className = "left_li_selected";
        if (this.id === "left_li_1") {
            right[0].style.display = ""
        } else {
            right[0].style.display = "none"
        }
    }
}

