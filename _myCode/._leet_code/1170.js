/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */

var numSmallerByFrequency = function (queries, words) {
    function f(s) {
        let count = 0;
        let min = "z";
        for (let char of s)
            if (char === min) count++;
            else if (char < min) {
                min = char;
                count = 1;
            }
        return count;
    }

    let mapArr = new Array(12).fill(0);
    words.map(f).forEach(num => mapArr[num - 1]++);
    let dec = mapArr.length - 1;
    while (--dec) mapArr[dec] += mapArr[dec + 1];
    return queries.map(word => mapArr[Math.min(f(word), mapArr.length - 1)]);
};

// var numSmallerByFrequency = function (queries, words) {
//     function f(s) {
//         let map = new Map();
//         let min = "z";
//         for (let char of s) {
//             if (char < min) min = char;
//             map.set(char, map.get(char) + 1 || 1);
//         }
//         return map.get(min);
//     }
//
//     let map = new Map();
//     words.map(f).forEach(val => {
//         map.set(val, map.get(val) + 1 || 1);
//     });
//     let arr = [...map].sort(([k1], [k2]) => {
//         return k1 - k2;
//     });
//     let max = arr[arr.length - 1][0];
//     let table = new Array(max + 1);
//     table[max] = 0;
//     let dec = arr.length - 1;
//     for (let i = max - 1; i >= 0; i--) {
//         table[i] = table[i + 1];
//         if (dec >= 0 && i < arr[dec][0])
//             table[i] += arr[dec--][1];
//     }
//     return queries.map(word => table[Math.min(f(word), table.length - 1)]);
// };

let queries = ["bba", "abaaaaaa", "aaaaaa", "bbabbabaab", "aba", "aa", "baab", "bbbbbb", "aab", "bbabbaabb"];
let words = ["aaabbb", "aab", "babbab", "babbbb", "b", "bbbbbbbbab", "a", "bbbbbbbbbb", "baaabbaab", "aa"];

console.log(numSmallerByFrequency(queries, words));
