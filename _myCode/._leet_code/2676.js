/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function (fn, t) {
    let timer = null;
    let savedArgs = null;
    return function (...args) {
        function apply() {
            fn.apply(this, savedArgs);
            savedArgs = null;
            timer = setTimeout(() => {
                timer = null;
                if (savedArgs) apply();
            }, t);
        }
        savedArgs = args;
        if (!timer) apply();
    };
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
