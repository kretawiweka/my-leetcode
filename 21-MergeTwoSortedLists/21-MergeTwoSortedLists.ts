// Last updated: 4/8/2026, 2:09:06 AM
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let mergedHead = new ListNode(0);
    let mergedListNode = mergedHead;     
    
    while(list1 !== null && list2 !== null){        
        
        if(list1.val < list2.val){
            mergedListNode.next = list1;
            list1 = list1.next
        } else {
            mergedListNode.next = list2
            list2 = list2.next
        }

        mergedListNode = mergedListNode.next
    }
    
    if(list1 !== null) {
        mergedListNode.next = list1;
    } else if (list2 !== null) {
        mergedListNode.next = list2
    }
    
    return mergedHead.next
};

