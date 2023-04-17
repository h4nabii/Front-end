// 1 two sum
// https://leetcode.cn/problems/two-sum/
{
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
    }

    console.log(twoSum(twoSumArg.nums, twoSumArg.target));
}

// 2 add two numbers
// https://leetcode.cn/problems/add-two-numbers/
{
    //Definition for singly-linked list.
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    var addTwoNumbers = function (l1, l2) {
        let sum = l1.val + l2.val;
        let plus = sum >= 10;
        if (plus) sum -= 10;
        let list = new ListNode(sum);
        let iterator = list;
        while (plus || l1?.next || l2?.next) {
            l1 = l1?.next;
            l2 = l2?.next;
            sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + plus;
            (plus = sum >= 10) ? sum -= 10 : null;
            iterator.next = new ListNode(sum);
            iterator = iterator.next;
        }
        return list;
    };

    function getListNode(list) {
        let listNode = new ListNode(list[0]);
        let iter = listNode;
        for (let i = 1; i < list.length; i++) {
            iter.next = new ListNode(list[i]);
            iter = iter.next;
        }
        return listNode;
    }

    let ans = addTwoNumbers(getListNode([9, 9, 9, 9, 9, 9, 9]), getListNode([9, 9, 9, 9]));
    let ans_list = [];
    while (ans) {
        ans_list.push(ans.val);
        ans = ans.next;
    }
    console.log(ans_list);
}

// 3
// https://leetcode.cn/problems/longest-substring-without-repeating-characters/
{
    /**
     * @param {string} s
     * @return {number}
     */
    var lengthOfLongestSubstring = function (s) {
        let set = new Set();
        let max = 0;
        let start = 0
        for (let i = 0; i < s.length; i++) {
            if (set.has(s[i])) {
                while (s[start] !== s[i]) set.delete(s[start++]);
                start++;
            } else {
                set.add(s[i]);
                max = Math.max(max, set.size);
            }
        }
        return Math.max(max, set.size);
    };

    console.log(lengthOfLongestSubstring("aab"));
}

// 4
// https://leetcode.cn/problems/median-of-two-sorted-arrays/
{
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
            .sort((a, b) => b - a)
        return length % 2 ? center[0] : (center[0] + center[1]) / 2;
    };

    console.log(findMedianSortedArrays([0, 0, 0, 0,], [-1, 0, 0, 0, 0, 0, 1]))
    console.log(findMedianSortedArrays([1, 2], [3, 4]))
}
