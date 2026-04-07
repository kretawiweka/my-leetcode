// Last updated: 4/8/2026, 2:06:25 AM
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

function getDecimalValue(head: ListNode | null): number {
    return convertBinaryToNumber(head)
};

const convertBinaryToNumber = (head: ListNode | null): number => {
    let binaryStr = ''        
    while (head) {
        binaryStr = `${binaryStr}${head.val}`
        head = head.next
    }
    console.log(binaryStr)
    return parseInt(binaryStr, 2)
}