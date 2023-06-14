/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
    let map = new Map();
    nums.forEach(val => map.set(val, map.get(val) + 1 || 1));
    let sum = 0;
    let pre = 0;
    for (let v of map.values()) {
        sum += pre * v * (nums.length - pre - v);
        pre += v;
    }
    return sum;
};
