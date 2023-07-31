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
    list.reverse().forEach(val => node = new ListNode(val, node));
    return node;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
    let dummy = new ListNode(0, head);
    let map = new Map();
    let iter = dummy;
    let sum = 0;
    while (iter) {
        map.set(sum += iter.val, iter);
        iter = iter.next;
    }
    iter = dummy;
    sum = 0;
    while (iter) {
        sum += iter.val;
        iter.next = map.get(sum).next;
        iter = iter.next;
    }
    return dummy.next;
};

function f(head) {
    if (head === null) return null;
    let sum = 0;
    for (let cursor = head; cursor != null; cursor = cursor.next) {
        if ((sum += cursor.val) === 0)
            return removeZeroSumSublists(cursor.next);
        head.next = removeZeroSumSublists(head.next);
    }
    return head;
}

console.log([...removeZeroSumSublists(toNode([1, 2, -3, 3, 1]))]);
console.log([...f(toNode([1, 2, -3, 3, 1]))]);
