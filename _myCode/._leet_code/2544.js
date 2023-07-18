/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
    let sign = -1;
    let sum = 0;
    let counter = 0;
    while (n) {
        counter++;
        let num = n % 10;
        n = Math.floor(n / 10);
        sum += sign * num;
        sign = -sign;
    }
    if (counter % 2) sum = -sum;
    return sum;
};

console.log(alternateDigitSum(521));
