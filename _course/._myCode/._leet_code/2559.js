/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
    let vowels = /^[aeiou](?:\S*[aeiou])?$/;
    let preSum = new Array(words.length + 1).fill(0);
    let ans = [];
    words.forEach((val, index) => {
            // console.log((val.match(vowels)));
            preSum[index + 1] = preSum[index] + (val.match(vowels) ? 1 : 0);
        }
    )
    queries.forEach(([start, end]) =>
        ans.push(preSum[end + 1] - preSum[start])
    )
    return ans;
};

let words = ["aba", "bcb", "ece", "aa", "e", ""];
let query = [[0, 2], [1, 4], [1, 1]];

console.log(vowelStrings(words, query));
