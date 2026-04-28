// Last updated: 4/28/2026, 11:06:37 PM
1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val, left, right) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.left = (left===undefined ? null : left)
6 *     this.right = (right===undefined ? null : right)
7 * }
8 */
9/**
10 * @param {number[]} nums
11 * @return {TreeNode}
12 */
13var sortedArrayToBST = function(nums) {
14    const build = (left, right) => {
15        if (left > right) return null
16
17        const mid = Math.floor((left + right) / 2)
18
19        const node = new TreeNode(nums[mid])
20        node.left = build(left, mid-1)
21        node.right = build(mid+1, right)
22        return node
23    }  
24
25    return build(0, nums.length - 1)
26};