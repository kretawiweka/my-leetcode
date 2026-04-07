// Last updated: 4/8/2026, 2:07:56 AM
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

function isPalindrome(head: ListNode | null): boolean {    
    let fast = head
    let slow = head
    
    while (fast !== null && fast?.next !== null) {
        fast = fast.next.next
        slow = slow.next    
    }
    
    if (fast !== null) {
        slow = slow.next
    }
    
    console.log('slow', slow)   
    
    slow = reverse(slow)
    fast = head
    
    console.log('slow', slow)
    console.log('fast', fast)
    
    while (slow != null) {
        if (fast.val != slow.val) {
            return false;
        }
        fast = fast.next;
        slow = slow.next;
    }
    
    return true;
    
};


function reverse(head: ListNode | null) {
    let prev: ListNode | null = null;
    while (head != null) {
        let next: ListNode | null = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev; 
}
