//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let sum = l1.val + l2.val;
    let plus = sum >= 10;
    if (plus) sum -= 10;
    let list = new ListNode(sum);
    let iterator = list;
    while (plus || l1?.next || l2?.next) {
        l1 = l1?.next;
        l2 = l2?.next;
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + plus;
        // eslint-disable-next-line no-cond-assign
        (plus = sum >= 10) ? sum -= 10 : null;
        iterator.next = new ListNode(sum);
        iterator = iterator.next;
    }
    return list;
};

function getListNode(list) {
    let listNode = new ListNode(list[0]);
    let iter = listNode;
    for (let i = 1; i < list.length; i++) {
        iter.next = new ListNode(list[i]);
        iter = iter.next;
    }
    return listNode;
}

let ans = addTwoNumbers(getListNode([9, 9, 9, 9, 9, 9, 9]), getListNode([9, 9, 9, 9]));
let ans_list = [];
while (ans) {
    ans_list.push(ans.val);
    ans = ans.next;
}
console.log(ans_list);
