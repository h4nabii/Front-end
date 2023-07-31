/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
    let width = grid[0].length;
    let height = grid.length;

    let searched = new Array(height);
    for (let i = 0; i < searched.length; i++) {
        searched[i] = new Array(width).fill(false);
    }
    let count = 0;

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            console.log("start row", row, "col", col);
            if (grid[row][col] === 0) {
                count++;
                dfs(col, row);
            }
            searched[row][col] = true;
            console.log("stop row", row, "col", col);
        }
    }
    console.log(count);

    function dfs(x, y) {
        console.log(" >> dfs at row", y, "col", x);
        if (searched[y][x]) {
            console.log(" <- back");
            return;
        }
        searched[y][x] = true;
        if (grid[y][x] === 1) return;
        if (x > 0) {
            console.log(" -> left");
            dfs(x - 1, y);
        }
        if (x < width - 1) {
            console.log(" -> right");
            dfs(x + 1, y);
        }
        if (y > 0) {
            console.log(" -> up");
            dfs(x, y - 1);
        }
        if (y < height - 1) {
            console.log(" -> down");
            dfs(x, y + 1);
        }
        console.log("-----------------------");
        grid.forEach(val => console.log(...val));
        searched.forEach(val => console.log(...val));
    }
};

let grid = [[1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0]];
closedIsland(grid);
