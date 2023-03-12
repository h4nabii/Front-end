let links =  document.getElementsByClassName("navi");

for (let a_ele of links) {
    a_ele.onclick = function () {
        for (let li of links) {
            li.className = "navi";
        }
        this.className = "navi navi_selected";
    }
}