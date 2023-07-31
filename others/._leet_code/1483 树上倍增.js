// 1 <= k <= n <= 5 * 10^4
// parent[0] == -1 表示编号为 0 的节点是根节点。
// 对于所有的 0 < i < n, 0 <= parent[i] < n 总成立
// 0 <= node < n
// 至多查询 5 * 10^4 次

/**
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor = function (n, parent) {
    let jMax = Math.ceil(Math.log2(n));

    let parentMap = new Array(n);
    for (let node = 0; node < n; node++) {
        parentMap[node] = new Array(jMax).fill(-1);
        for (let j = 0; j < jMax; j++) {
            console.log(node, Math.pow(2, j));
            if (j === 0) parentMap[node][j] = parent[node];
            else {
                let once = parentMap[node][j - 1];
                if (once === -1) {
                    console.log("once break");
                    break;
                } else {
                    console.log(once);
                    console.log(parentMap[once][j - 1] ?? -1);
                    let twice = parentMap[node][j] = parentMap[once][j - 1] ?? -1;
                    if (twice === -1) {
                        console.log("twice break;");
                        break;
                    }
                }
            }
            console.log(node, parentMap[node]);
        }
    }
    this.map = parentMap;
};

/**
 * @param {number} node
 * @param {number} k
 * @return {number}
 */
TreeAncestor.prototype.getKthAncestor = function (node, k) {
    console.log(node, k);
    let j = 0;
    while (k) {
        console.log(node, k, j);
        if (k % 2) {
            node = this.map[node][j];
            if (node === - 1) return -1;
            console.log(node);
        }
        j++;
        k = Math.floor(k / 2);
    }
    return node;
};

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */
let obj = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);
console.log(obj.getKthAncestor(3, 1));
console.log(obj.getKthAncestor(5, 2));
console.log(obj.getKthAncestor(6, 3));
