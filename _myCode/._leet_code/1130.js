/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
    function get(i) {
        return arr[i] * arr[i + 1];
    }

    let sum = 0;
    while (!(arr.length === 1)) {
        let min = 0;
        for (let i = 1; i < arr.length - 1; i++)
            if (get(i) < get(min)) min = i;
        sum += get(min);
        arr.splice(min, 2, Math.max(arr[min], arr[min + 1]));
    }
    return sum;
};

// var mctFromLeafValues = function (arr) {
//     let n = arr.length;
//     let ans = 0;
//     let stack = [Infinity];
//
//     for (let i = 0; i < n; i++) {
//         while (stack[stack.length - 1] <= arr[i]) {
//             let mid = stack.pop();
//             ans += mid * Math.min(stack[stack.length - 1], arr[i]);
//         }
//         stack.push(arr[i]);
//     }
//
//     while (stack.length > 2) {
//         let mid = stack.pop();
//         ans += mid * stack[stack.length - 1];
//     }
//
//     return ans;
// }

console.log(mctFromLeafValues([6, 2, 4]));
