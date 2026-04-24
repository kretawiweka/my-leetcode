// Last updated: 4/24/2026, 9:06:46 PM
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
11 * @return {number}
12 */
13var deepestLeavesSum = function(root) {
14    if (!root) return 0
15
16    let queue = [root]
17    let sum = 0
18
19    while (queue.length) {
20        let size = queue.length
21        sum = 0
22
23        for (let i = 0 ; i < size; i++) {
24            const node = queue.shift()
25            sum += node.val
26
27            if(node.left) queue.push(node.left)
28            if(node.right) queue.push(node.right)
29        }
30    }
31
32    return sum
33};