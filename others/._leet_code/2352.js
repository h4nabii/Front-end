/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    let colMap = new Map();
    let rowMap = new Map();

    for (let col = 0; col < grid[0].length; col++) {
        let colItems = [];
        for (let row = 0; row < grid.length; row++) {
            colItems.push(grid[row][col]);
        }
        colItems = JSON.stringify(colItems);
        colMap.set(colItems, colMap.get(colItems) + 1 || 1);
    }

    for (let row = 0; row < grid.length; row++) {
        let rowStr = JSON.stringify(grid[row]);
        rowMap.set(rowStr, rowMap.get(rowStr) + 1 || 1);
    }

    // console.log(colMap);
    // console.log(rowMap);

    let count = 0;
    for (let [k, v] of colMap) {
        for (let [k2, v2] of rowMap) {
            if (k === k2) {
                count += v * v2;
                // console.log(k, v, v2);
            }
        }
    }
    return count;
};

let grid = [[11, 1], [1, 11]];
console.log(equalPairs(grid));
