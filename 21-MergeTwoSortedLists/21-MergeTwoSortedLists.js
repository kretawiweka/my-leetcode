// Last updated: 4/27/2026, 9:43:27 PM
1/**
2 * Definition for singly-linked list.
3 * function ListNode(val, next) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.next = (next===undefined ? null : next)
6 * }
7 */
8/**
9 * @param {ListNode} list1
10 * @param {ListNode} list2
11 * @return {ListNode}
12 */
13var mergeTwoLists = function(list1, list2) {
14    let dummy = new ListNode()
15    let current = dummy
16
17    while (list1 !== null && list2 !== null) {
18        if (list1.val <= list2.val) {
19            current.next = list1        
20            list1 = list1.next
21        } else {
22            current.next = list2     
23            list2 = list2.next
24        }
25        current = current.next
26    }
27
28    current.next = list1 || list2
29
30    return dummy.next
31};