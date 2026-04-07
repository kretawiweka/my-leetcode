// Last updated: 4/8/2026, 2:08:48 AM
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    return returnUniqueList(head)
};

const returnUniqueList = (head: ListNode | null): ListNode | null => {
    let pointer = head
    while (pointer) {
        while (pointer.next && pointer.val == pointer.next.val) {
            pointer.next = pointer.next.next
        }
        pointer = pointer.next
    }
    
    return head
}