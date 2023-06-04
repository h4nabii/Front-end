/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) return [];
    let arr = new Array(rowsCount);

    for (let i = 0; i < rowsCount; i++) {
        arr[i] = new Array(colsCount);
        for (let j = 0; j < colsCount; j++) {
            arr[i][j] = this[j * rowsCount + (j % 2 === 1 ? rowsCount - i - 1 : i)];
        }
    }
    return arr;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */

const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
console.log(arr.snail(5, 4)); // [[1,2,3,4]]
