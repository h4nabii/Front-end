/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
    nums.sort((a, b) => a - b);
    let set = new Set();
    for (let i = 0; i < nums.length / 2; i++) {
        set.add((nums[i] + nums[nums.length - 1 - i]));
    }
    return set.size;
};

console.log(distinctAverages([4, 1, 4, 0, 3, 5]));
