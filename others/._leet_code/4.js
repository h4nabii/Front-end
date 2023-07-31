/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let length = nums1.length + nums2.length;
    let pos = Math.floor(length / 2) + 1;
    let i = 0;
    let j = 0;
    for (let k = 0; k < pos; k++) {
        if (i < nums1.length && j < nums2.length) {
            if (nums1[i] < nums2[j]) i++;
            else j++;
        } else if (i < nums1.length) i++;
        else j++;
    }
    let center = [nums1[i - 1], nums1[i - 2], nums2[j - 1], nums2[j - 2]]
        .sort((a, b) => b - a);
    return length % 2 ? center[0] : (center[0] + center[1]) / 2;
};

console.log(findMedianSortedArrays([0, 0, 0, 0,], [-1, 0, 0, 0, 0, 0, 1]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
