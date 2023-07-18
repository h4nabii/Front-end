let leftMask = $("#left-mask");
let rightMask = $("#right-mask");
let setLeftOpacity = changeOpacityOf(leftMask);
let setRightOpacity = changeOpacityOf(rightMask);
leftMask.on("mouseover", () => setLeftOpacity(1));
leftMask.on("mouseout", () => setLeftOpacity(0));
rightMask.on("mouseover", () => setRightOpacity(1));
rightMask.on("mouseout", () => setRightOpacity(0));

function changeOpacityOf(jQObj) {
    return function (targetOpacity) {
        clearInterval(jQObj.timer);
        let opacity = parseFloat(jQObj.css("opacity"));
        let sign = Math.sign(targetOpacity - opacity);
        let speed = sign * 0.1;
        jQObj.timer = setInterval(() => {
            if (sign > 0 && opacity < targetOpacity ||
                sign < 0 && opacity > targetOpacity)
                opacity += speed;
            else {
                opacity = targetOpacity;
                clearInterval(jQObj.timer);
            }
            jQObj.css("opacity", opacity);
        }, 20);
    };
}

let banner = $("#banner");
let imgs = banner.children("img");
for (let i = 0; i < imgs.length; i++) $(imgs[i]).css("z-index", -i);
let curIndex = 0;
maxIndex = imgs.length - 1;

leftMask.click(() => changeBanner("left"));
rightMask.click(() => changeBanner("right"));

let bannerSlideTimer = setInterval(() => changeBanner("right"), 6000);
banner.on("mouseover", () => clearInterval(bannerSlideTimer));
banner.on("mouseout", () => bannerSlideTimer = setInterval(() => changeBanner("right"), 6000));

function changeBanner(dir) {
    if (!banner.timer) {
        switch (dir) {
        case "left":
            curIndex--;
            if (curIndex < 0) curIndex = maxIndex;
            break;
        case "right":
            curIndex++;
            if (curIndex > maxIndex) curIndex = 0;
            break;
        default:
            return;
        }
        for (let img of imgs) {
            $(img)
                .removeClass("show")
                .css("z-index", Math.max(-10, $(img).css("z-index") - 1));
        }
        let curImg = $(imgs[curIndex]);
        curImg.addClass("show");
        let curWidth = 0;
        curImg.css({
            "width": curWidth,
            "z-index": 0
        });
        banner.timer = setInterval(() => {
            if (curWidth < 1000) {
                curWidth += 25;
            } else {
                curWidth = 1000;
                clearInterval(banner.timer);
                banner.timer = null;
            }
            curImg.css("width", curWidth);
        }, 10);
    }
}


let btn_left = $("#slider-move-left-btn");
let btn_right = $("#slider-move-right-btn");
let products = $("#products");
let productsLength = products.children().length;

let firstFive = products.find(`li:lt(5)`);
let lastFive = [...products.find(`li:gt(${productsLength - 6})`)].reverse();
for (let last of lastFive) products.prepend(last.cloneNode(true));
for (let front of firstFive) products.append(front.cloneNode(true));
products.css("left", -195 * 5);

btn_left.click(() => move("right"));
btn_right.click(() => move("left"));
setInterval(() => move("left"), 5000);

let productsTimer = null;

function move(dir) {
    if (!productsTimer) {
        let {left} = products.position();
        let left_max = 0;
        let left_min = -195 * (productsLength + 5);
        let moveDis = 195, speed = 5, dest;

        switch (dir) {
        case "left":
            moveDis = -moveDis;
            speed = -speed;
            break;
        case "right":
            break;
        default:
            return;
        }

        dest = left + moveDis;
        productsTimer = setInterval(() => {
            if (left !== dest) left += speed;
            else {
                clearInterval(productsTimer);
                productsTimer = null;
                // console.log(left);
                if (left === left_max) left = left_min + (195 * 5);
                if (left === left_min) left = left_max - (195 * 5);
            }
            products.css("left", left);
        }, 10);
    }
}
