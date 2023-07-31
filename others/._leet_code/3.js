/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let max = 0;
    let start = 0;
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
