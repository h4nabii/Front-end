/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function (price, k) {
    let binarySearch = {
        minVal(min, max, matchFn, mode = "min") {
            while (min < max) {
                let mid = Math.ceil((max + min) / 2);
                if (matchFn(mid)) min = mid;
                else max = mid - 1;
            }
            return min;
        },
        maxVal(min, max, matchFn, mode = "min") {
            while (min < max) {
                let mid = Math.ceil((max + min) / 2);
                if (matchFn(mid)) max = mid;
                else min = mid + 1;
            }
            return min;
        }
    }

    let n = price.length;
    price.sort(function (a, b) {
        return a - b;
    });

    return binarySearch.minVal(0, price[n - 1] - price[0], val => {
        let cur = price[0];
        let count = 1;
        for (let i = 1; i < n; i++)
            if (price[i] - cur >= val) {
                cur = price[i];
                count++;
            }
        return count >= k;
    });
};
