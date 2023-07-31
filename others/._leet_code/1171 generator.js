/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class MyNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }

    * [Symbol.iterator]() {
        let iter = this;
        while (iter) {
            yield iter.val;
            iter = iter.next;
        }
    }
}

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

Array.prototype.toNode = function () {
    let node;
    this.reverse().forEach(val => node = new ListNode(val, node));
    return node;
};

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
    for (let [prefix, node] of dummy.prefix()) map.set(prefix, node);
    for (let [prefix, node] of dummy.prefix()) node.next = map.get(prefix).next;
    return dummy.next;
};

console.log(...[1, 14, 1, 4, 1, 4, 1, -1].toNode());
console.log([removeZeroSumSublists([1, -1].toNode())]);
