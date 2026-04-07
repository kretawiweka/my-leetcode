// Last updated: 4/8/2026, 2:08:10 AM
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    let prev = null
    let curr = head

    while (curr) {
        const next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp 
    }

    return prev
};