/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function (text) {
    const countMap = new Map();
    for (let i = 0; i < text.length; i++)
        countMap.set(text.charAt(i), (countMap.get(text.charAt(i)) || 0) + 1)

    let maxLen = 0;
    for (let i = 0; i < text.length;) {
        let char = text.charAt(i);

        let j = i + 1;
        while (j < text.length && text.charAt(j) === char) j++;

        let len = j - i;
        if (len < countMap.get(char)) {
            let k = j + 1;
            while (k < text.length && text.charAt(k) === char) k++;
            maxLen = Math.max(maxLen, Math.min(k - i, countMap.get(char)));
        } else {
            maxLen = Math.max(maxLen, len);
        }
        i = j;
    }
    return maxLen;
};
