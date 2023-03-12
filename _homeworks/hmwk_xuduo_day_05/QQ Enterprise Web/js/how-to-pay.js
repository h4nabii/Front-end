let right = document.getElementsByClassName("right");

let list = [
    document.getElementById("left_li_1"),
    document.getElementById("left_li_2"),
    document.getElementById("left_li_3"),
    document.getElementById("left_li_4"),
    document.getElementById("left_li_5")
];

let pages = [
    document.getElementById("list_1"),
    document.getElementById("list_2"),
    document.getElementById("list_3"),
    document.getElementById("list_4"),
    document.getElementById("list_5")
];

window.onload = function () {
    resetPages();
    pages[0].style.display = "";
}

function resetPages() {
    for (let page of pages) {
        page.style.display = "none";
    }
}

for (let item of list) {
    item.onclick = function () {
        for (let li of list) {
            li.className = "";
        }
        this.className = "left_li_selected"
        resetPages()
        switch (this.id) {
            case "left_li_1":
                right[0].style.display = "";
                break;
            case "left_li_2":
                right[1].style.display = "";
                break;
            case "left_li_3":
                right[2].style.display = "";
                break;
            case "left_li_4":
                right[3].style.display = "";
                break;
            case "left_li_5":
                right[4].style.display = "";
                break;
        }
    }
}

