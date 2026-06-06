// Last updated: 6/7/2026, 12:49:15 AM
1/**
2 * Definition for singly-linked list.
3 * function ListNode(val, next) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.next = (next===undefined ? null : next)
6 * }
7 */
8/**
9 * @param {ListNode} list1
10 * @param {number} a
11 * @param {number} b
12 * @param {ListNode} list2
13 * @return {ListNode}
14 */
15var mergeInBetween = function(list1, a, b, list2) {
16    let start = null
17    let end = list1
18
19    for (let index = 0; index < b; index++) {
20        if (index === a-1) {
21            start = end
22        }
23        end = end.next
24    }
25
26    start.next = list2
27
28    while (start.next !== null) {
29        start = start.next   
30    }
31
32    start.next = end.next
33
34    return list1
35};