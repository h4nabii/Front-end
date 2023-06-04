/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
    while (obj !== null && obj !== undefined) {
        if (obj.constructor === classFunction) {
            return true;
        }
        // obj = obj.__proto__;
        obj = Object.getPrototypeOf(obj);
    }
    return false;
};

console.log(checkIfInstanceOf(0, Object));
