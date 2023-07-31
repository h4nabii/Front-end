/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    let n = [];
    let z = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            z++;
            continue;
        }
        if (nums[i] === nums[i + 1]) {
            n.push(nums[i] * 2);
            z++;
            i++;
        } else n.push(nums[i]);
    }
    return [...n, ...("0".repeat(z)).split("").map(val => Number.parseInt(val))];
};

console.log(applyOperations([1, 0, 2, 0, 0, 1]));
