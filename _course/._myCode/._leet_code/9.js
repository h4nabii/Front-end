/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
    let list = x.toString();
    let n = list.length;

    for (let i = 0; i < n / 2; i++) {
        if (list[i] !== list[n - i - 1]) return false;
    }
    return true;
};

// var isPalindrome = function(x) {
//     if(x<0||(x%10===0&&x!==0)) return false;
//
//     let temp = 0, s = x
//     while(s>temp){
//         temp = temp * 10 + s % 10
//         s = Math.floor(s/10)
//     }
//     return s === temp || s === Math.floor(temp/10)
// };
