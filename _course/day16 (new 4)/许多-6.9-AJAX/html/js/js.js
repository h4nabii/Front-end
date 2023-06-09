let oComment = {
    init() {
        let that = this;
        let btnNode = document.querySelector("#btnNode");
        let textNode = document.querySelector("#textNode");
        let detailNode = document.querySelector("#article-detail");
        let commitNode = document.querySelector("#commitNode");
        btnNode.onclick = function () {
            that.sendComment(textNode);
            textNode.value = "";
            that.getComment(commitNode);
        };
        that.getComment(commitNode);
        that.getDetail(detailNode);
    },
    getComment(commitNode) {
        let that = this;
        let ajax = new XMLHttpRequest();
        ajax.open("get", "http://localhost:8088/commit/list?id=1");
        ajax.send();
        ajax.onreadystatechange = function () {
            if (ajax.status === 200 && ajax.readyState === 4) {
                let json = JSON.parse(ajax.responseText);
                commitNode.textContent = "";
                let flagNode = document.createDocumentFragment();
                json.data.forEach(function (item) {
                    let dlNode = document.createElement("dl");
                    let dtNode = document.createElement("dt");
                    let ddNode = document.createElement("dd");
                    dtNode.innerHTML = `匿名网友 ${that.parseTime(item.timestamp)} 发表 `;
                    ddNode.innerHTML = item.text;
                    dlNode.appendChild(dtNode);
                    dlNode.appendChild(ddNode);
                    flagNode.appendChild(dlNode);
                });
                commitNode.appendChild(flagNode);
            }
        };
    },
    sendComment(textNode) {
        let xhr = new XMLHttpRequest();
        let url = "http://localhost:8088/commit/list";
        url += "?user=" + Math.floor(Math.random() * 100 + 100);
        url += "&timestamp=" + new Date().getTime();
        url += "&text=" + textNode.value;
        xhr.open("post", url);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && xhr.readyState === 4) {
                let json = JSON.parse(xhr.responseText);
                console.log(json);
            }
        };
    },
    getDetail(detailNode) {
        let xhr = new XMLHttpRequest();
        xhr.open("get", "http://localhost:8088/article/detail");
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && xhr.readyState === 4) {
                let json = JSON.parse(xhr.responseText);
                detailNode.textContent = json.data;
            }
        };
    },
    parseTime(time) {
        let that = this;
        let dateObj = new Date();
        dateObj.setTime(time);
        let year = dateObj.getFullYear();
        let month = dateObj.getMonth() + 1;
        let date = dateObj.getDate();
        let day = dateObj.getDay(); // 0 - 6
        let hours = dateObj.getHours(); // 0 ~ 23
        let minutes = dateObj.getMinutes(); // 0 - 59
        let seconds = dateObj.getSeconds(); // 0 - 59

        return `${year}-${that.tenAddZero(month)}-${that.tenAddZero(date)} ${that.tenAddZero(hours)}:${that.tenAddZero(minutes)}:${that.tenAddZero(seconds)}`;
    },
    tenAddZero(num) {
        // 将小于10的数字前补0； num: number
        return num < 10 ? "0" + num : num.toString();
    }
};

oComment.init();
