// Last updated: 4/8/2026, 2:07:07 AM
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {    
    return sumTree(root1, root2)
};

const sumTree = (root1: TreeNode | null, root2: TreeNode | null): TreeNode | null => {
    if(!root1 || !root2) return root1 || root2
    root2.val += root1.val
    
    root2.left = sumTree(root1.left, root2.left)
    root2.right = sumTree(root1.right, root2.right)
    
    return root2
}