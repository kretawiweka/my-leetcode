// Last updated: 4/8/2026, 2:07:51 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {    
    if (!head.next) return true
    
    let slow = head
    let fast = head        
    slow = generateSlow({slow, fast}) 
    console.log(slow)
    slow = reverse(slow)
    fast = head
    return checkIsPalindrome({slow, fast})
};

const reverse = (head) => {
    let prev = null;
    while (head != null) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev; 
}

const generateSlow = ({slow, fast}) => {    
    if (fast != null && fast?.next != null) {           
        fast = fast.next.next
        slow = slow.next
        return generateSlow({slow, fast})        
    }    
    return slow
}


const checkIsPalindrome = ({slow, fast}) => {    
    if (slow == null) {
        return true
    }
    
    if (fast.val != slow.val) {
        return false
    }
    
    fast = fast.next
    slow = slow.next
    
    return checkIsPalindrome({slow, fast})        
}