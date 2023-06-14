/**
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor = function (n, parent) {
    class Node {
        constructor(val, parent) {
            this.val = val;
            this.parent = parent;
        }
    }

    this.nodes = [];
    while (n--) this.nodes[n] = new Node(n);
    parent.forEach((val, index) => {
        this.nodes[index].parent = this.nodes[val];
    });
};

/**
 * @param {number} node
 * @param {number} k
 * @return {number}
 */
TreeAncestor.prototype.getKthAncestor = function (node, k) {
    let nodeObj = this.nodes[node];
    while (nodeObj && k--) {
        nodeObj = nodeObj.parent;
    }
    return nodeObj?.val ?? -1;
};

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */
