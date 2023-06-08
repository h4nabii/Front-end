/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    function getNumber(char) {
        switch (char) {
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
        }
    }

    let stack = [];
    for (let char of s) {
        let num = getNumber(char);
        if (stack.length === 0) {
            stack.push(num);
        } else {
            let top = stack[stack.length - 1];
            if (top < num) {
                stack.pop();
                stack.push(num - top);
            } else {
                stack.push(num);
            }
        }
    }
    return stack.reduce((p, c) => {
        return p + c;
    }, 0);
};

let s = "MCMXCIV";
console.log(romanToInt( s));
