/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function (s, queries) {

    let alpha = new Array(26).fill(0);
    let counts = [];
    counts[-1] = 0;
    let count = 0;
    [...s].forEach(char => {
        let code = char.charCodeAt(0) - 97;
        alpha[code]++;
        if (alpha[code] % 2 === 1) count++;
        else count--;
        counts.push(count);
    });

    let rst = [];
    queries.forEach(([l, r, k]) => {
        console.log(l, r, k);
        console.log(counts[r], counts[l - 1], Math.floor(Math.abs(counts[r] - counts[l - 1]) / 2));
        rst.push(Math.floor(Math.abs(counts[r] - counts[l - 1]) / 2) <= k);
    });
    return rst;
};

console.log(canMakePaliQueries("abcda", [[3, 3, 0], [1, 2, 0], [0, 3, 1], [0, 3, 2], [0, 4, 1]]));
