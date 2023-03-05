const DEBUG = true;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const lineCount = 19;
const GridWidth = 20;
const BorderWidth = (canvas.width - (lineCount - 1) * GridWidth) / 2;

function debugInfo(...str) {
    if (DEBUG) console.log("[DEBUG INFO]", ...str)
}

;(function drawBoard() {
    ctx.beginPath();
    for (let i = 0; i < lineCount; i++) {
        ctx.moveTo(BorderWidth + i * GridWidth, BorderWidth);
        ctx.lineTo(BorderWidth + i * GridWidth, BorderWidth + GridWidth * (lineCount - 1));

        ctx.moveTo(BorderWidth, BorderWidth + i * GridWidth);
        ctx.lineTo(BorderWidth + GridWidth * (lineCount - 1), BorderWidth + i * GridWidth);
    }
    ctx.stroke();
})();

console.log(1);

let blOrWh = 0;

let matrix = [];
for (let i = 0; i < lineCount; i++) {
    let row = [];
    for (let j = 0; j < lineCount; j++) row.push(0);
    matrix.push(row);
}

console.log(matrix);

const placingStone = function (stoneColor, stoneX, stoneY) {
    if (matrix?.[stoneX]?.[stoneY] === 0) {

        console.log(blOrWh ? "BLACK is next!" : "WHITE is next!");

        stoneColor = !stoneColor;

        ctx.beginPath();
        if (stoneColor) {
            ctx.fillStyle = "black";
            ctx.arc(BorderWidth + stoneX * GridWidth, BorderWidth + stoneY * GridWidth, GridWidth / 2, 0, Math.PI * 2);
            ctx.stroke();
            matrix[stoneX][stoneY] = 1;
        } else {
            ctx.fillStyle = "white";
            ctx.arc(BorderWidth + stoneX * GridWidth, BorderWidth + stoneY * GridWidth, GridWidth / 2, 0, Math.PI * 2);
            ctx.stroke();
            matrix[stoneX][stoneY] = 2;
        }
        ctx.fill();
    }
    return stoneColor;
};

function getStatOf(x, y) {
    debugInfo("Check pos (" + x + ", " + y + ")");

    let win = false;

    let currentStone = matrix?.[x]?.[y];
    if (!currentStone) return false;

    for (let times = 0; times < 4; times++) {
        let vertical = false;
        let horizontal = false;
        let leading = false;
        let secondary = false;
        switch (times) {
            case 0:
                horizontal = true;
                break;
            case 1:
                vertical = true;
                break;
            case 2:
                leading = true;
                break;
            case 3:
                secondary = true;
                break;
        }
        let count = 1;
        for (let i = 1; matrix?.[x - i * (horizontal + leading + secondary)]?.[y - i * (vertical + leading - secondary)] === currentStone; i++) {
            count++;
        }
        for (let i = 1; matrix?.[x + i * (horizontal + leading + secondary)]?.[y + i * (vertical + leading - secondary)] === currentStone; i++) {
            count++;
        }
        win ||= (count === 5);
    }

    return win;
}

$("#canvas").click(function (event) {
    debugInfo("----------------------------------------------")
    debugInfo("Clicking " + event.offsetX + ", " + event.offsetY)

    let gridX = Math.floor((event.offsetX - BorderWidth + GridWidth / 2) / GridWidth);
    let gridY = Math.floor((event.offsetY - BorderWidth + GridWidth / 2) / GridWidth);

    debugInfo(gridX, gridY)

    blOrWh = placingStone(blOrWh, gridX, gridY);
    if (getStatOf(gridX, gridY)) {
        console.log("someone win");
        blOrWh ?
            alert("black win!! refresh to restart!") :
            alert("white win!! refresh to restart!");
    }
});