/**
 * @param {number[]} flips
 * @return {number}
 */
var numTimesAllBlue = function (flips) {
    let max = 0;
    return flips.reduce((pre, val, index) => {
        max = Math.max(max, val);
        return pre + (max === index + 1 ? 1 : 0);
    }, 0);
};

console.log(numTimesAllBlue([4, 1, 2, 3]));
