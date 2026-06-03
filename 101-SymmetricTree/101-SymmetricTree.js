// Last updated: 6/4/2026, 12:12:54 AM
1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val, left, right) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.left = (left===undefined ? null : left)
6 *     this.right = (right===undefined ? null : right)
7 * }
8 */
9/**
10 * @param {TreeNode} root
11 * @return {boolean}
12 */
13var isSymmetric = function(root) {
14    const isMirror = (left, right) => {
15        if (!left && !right) return true
16        if (!left || !right) return false
17
18        return (
19            left.val === right.val &&
20            isMirror(left.left, right.right) &&
21            isMirror(left.right, right.left)
22        )
23    }
24
25    return isMirror(root?.left, root?.right)
26};