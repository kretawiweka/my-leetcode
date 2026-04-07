// Last updated: 4/8/2026, 2:08:43 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head

    while(current) {
        while(current.next && current.val === current.next.val) {
            current.next = current.next.next
        }
        current = current.next
    }  

    return head
};