/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++)
        if (map.has(nums[i])) return [map.get(nums[i]), i];
        else map.set(target - nums[i], i);
};

let twoSumArg = {
    nums: [2, 7, 11, 15],
    target: 9
};

console.log(twoSum(twoSumArg.nums, twoSumArg.target));
