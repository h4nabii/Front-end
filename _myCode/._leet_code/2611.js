/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
var miceAndCheese = function (reward1, reward2, k) {
    // 0 for mouse 1, all for mouse 2
    let sum = reward2.reduce((p, c) => {
        return p + c;
    }, 0);

    let differ = [];
    for (let i = 0; i < reward1.length; i++)
        differ.push(reward1[i] - reward2[i]);

    differ.sort((a, b) => b - a);
    while (k--) sum += differ[k];
    return sum;
};

let reward1 = [1, 2, 3, 4, 5];
let reward2 = [5, 4, 3, 2, 1];
let k = 3;
console.log(miceAndCheese(reward1, reward2, k));

