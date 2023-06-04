var TimeLimitedCache = function () {
    this.map = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    let exist = this.map.get(key);
    this.map.set(key, {
        value: value,
        timestamp: new Date().getTime(),
        duration: duration
    });
    return exist !== undefined;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    let data = this.map.get(key);
    if (data && data.timestamp + data.duration >= new Date()) {
        return data.value;
    }
    return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    let count = 0;
    for (let {duration, timestamp} of this.map.values()) {
        count += (timestamp + duration >= new Date());
    }
    return count;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
