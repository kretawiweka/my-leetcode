// Last updated: 4/8/2026, 2:05:56 AM
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, nodes) {
    if (nodes.length === 1) return nodes[0]
    return dfs(root, nodes)    
};

const dfs = (root, target) => {
    if (root === null) return null
    if (target.includes(root)) return root

    let left = dfs(root.left, target)
    let right = dfs(root.right, target)
    if (left && right) return root
    return left || right
}     