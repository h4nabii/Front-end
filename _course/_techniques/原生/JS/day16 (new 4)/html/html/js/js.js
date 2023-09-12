let button = document.querySelector(".textarea-btn");
let contentBox = document.querySelector(".textarea");
let commitBox = document.querySelector("div.commit");

button.onclick = function () {
    if (contentBox.value === "") return;
    let commentLine = document.createElement("dl");
    let user = document.createElement("dt");
    user.textContent = `匿名网友 ${
        new Intl.DateTimeFormat("zh-CN",
            {
                timeZone: "Asia/Shanghai",
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false
            }).format(new Date()).split("/").join("-")
    } 发表`;
    let comment = document.createElement("dd");
    comment.textContent = contentBox.value;
    contentBox.value = "";
    commentLine.appendChild(user);
    commentLine.appendChild(comment);
    commitBox.appendChild(commentLine);
};
