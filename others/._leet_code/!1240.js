/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var tilingRectangle = function (n, m) {
    let ans = Math.max(n, m);
    const rect = new Array(n).fill(0).map(() => new Array(m).fill(false));

    const dfs = (x, y, rect, cnt) => {
        const n = rect.length, m = rect[0].length;
        if (cnt >= ans) {
            return;
        }
        if (x >= n) {
            ans = cnt;
            return;
        }
        /* 检测下一行 */
        if (y >= m) {
            dfs(x + 1, 0, rect, cnt);
            return;
        }
        /* 如当前已经被覆盖，则直接尝试下一个位置 */
        if (rect[x][y]) {
            dfs(x, y + 1, rect, cnt);
            return;
        }

        for (let k = Math.min(n - x, m - y); k >= 1 && isAvailable(rect, x, y, k); k--) {
            /* 将长度为 k 的正方形区域标记覆盖 */
            fillUp(rect, x, y, k, true);
            /* 跳过 k 个位置开始检测 */
            dfs(x, y + k, rect, cnt + 1);
            fillUp(rect, x, y, k, false);
        }
    };
    dfs(0, 0, rect, 0);
    return ans;
};


const isAvailable = (rect, x, y, k) => {
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < k; j++) {
            if (rect[x + i][y + j]) {
                return false;
            }
        }
    }
    return true;
};

const fillUp = (rect, x, y, k, val) => {
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < k; j++) {
            rect[x + i][y + j] = val;
        }
    }
};
