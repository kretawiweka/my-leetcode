// Last updated: 4/8/2026, 2:08:26 AM
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) return null

    const map = new Map()
    let cur = head
    while(cur) {
        map.set(cur, new _Node(cur.val, null, null))
        cur = cur.next
    }

    cur = head
    while (cur) {
        const copy = map.get(cur)
        copy.next = map.get(cur.next) || null
        copy.random = map.get(cur.random) || null
        cur = cur.next
    }

    return map.get(head)
}