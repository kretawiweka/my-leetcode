// Last updated: 4/8/2026, 2:08:03 AM
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
var reverseList = function(head) {
  if (!head || !head.next) return head

  let current = head
  let prev = null

  while (current) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
  }   

  return prev

};