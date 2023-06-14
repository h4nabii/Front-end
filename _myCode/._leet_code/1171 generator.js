/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}


ListNode.prototype[Symbol.iterator] = function* () {
    let iter = this;
    while (iter) {
        yield iter.val;
        iter = iter.next;
    }
};

function toNode(list) {
    let node;
    list.reverse().forEach(val => {
        node = new ListNode(val, node);
    });
    return node;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

ListNode.prototype.prefix = function* () {
    let iter = this;
    let sum = 0;
    while (iter) {
        yield [sum += iter.val, iter];
        iter = iter.next;
    }
};

var removeZeroSumSublists = function (head) {
    let dummy = new ListNode(0, head);
    let map = new Map();
    let list = [...dummy.prefix()];
    for (let [prefix, node] of list)
        map.set(prefix, node);
    for (let [prefix, node] of list)
        node.next = map.get(prefix).next;
    return dummy.next;
};

console.log([removeZeroSumSublists(toNode([1, -1]))]);
