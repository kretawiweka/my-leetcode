// Last updated: 4/8/2026, 2:08:04 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummyHead = new ListNode(-1, head)
    let resEl = removeEl(dummyHead, val)    
    return resEl.next
};

const removeEl = (head, val) => {
    // base case
    if(head.next == null) {
        return head
    }
    let nextNode = removeEl(head.next, val)
    if (nextNode.val === val) {
        head.next = nextNode.next
    }
    return head
} 

// const removeEl = (head, val) => {    
//     if (head?.next) {        
//         if (head.next.val === val) {
//             head.next = head.next.next            
//         }        
//         removeEl(head.next, val)    
//     }
//     return head
// }