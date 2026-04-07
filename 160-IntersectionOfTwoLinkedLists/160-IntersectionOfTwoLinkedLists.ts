// Last updated: 4/8/2026, 2:08:19 AM
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    return getInterVal(headA, headB)
};

const getIntersectionVal = (headA: ListNode | null, headB: ListNode | null): ListNode | null => {        
    while (headA) {     
        let dummyB = headB
        while (dummyB) {                              
          if (headA === dummyB) {                    
              return headA
          }
          dummyB = dummyB.next
        }
        headA = headA.next
    }
    return null
}


const getInterVal = (headA: ListNode | null, headB: ListNode | null): ListNode | null => { 
    //boundary check
    if(headA == null || headB == null) return null;
    
    let a = headA;
    let b = headB;
    
    //if a & b have different len, then we will stop the loop after second iteration
    while( a != b){
    	//for the end of first iteration, we just reset the pointer to the head of another linkedlist
        a = a == null? headB : a.next;
        b = b == null? headA : b.next;    
    }
    
    return a;
}