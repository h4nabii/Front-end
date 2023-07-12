/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
    let sum = 0;
    let arr = [[], [], []];
    nums.forEach(val => {
        arr[val % 3].push(val);
    });

    sum += arr[0].reduce((pre, cur) => pre + cur);
    arr[1].sort((a, b) => b - a);
    arr[2].sort((a, b) => b - a);
    console.log(arr);
    while ((arr[1].length && arr[2].length) || arr[1].length >= 3) {

        if (arr[1].length < 3) {
            sum += arr[1].splice(1)[0] + arr[2].splice(1)[0];
            continue;
        }
        if (!arr[2].length) {
            sum += arr[1].splice(3).reduce((pre, cur) => pre + cur);
            continue;
        }
        if (arr[1][0] + arr[2][0] > arr);
    }
    return sum;
};

console.log(maxSumDivThree([1, 2, 3, 4, 4]));
