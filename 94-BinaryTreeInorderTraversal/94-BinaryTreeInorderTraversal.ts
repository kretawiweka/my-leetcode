// Last updated: 4/8/2026, 2:08:38 AM
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

function inorderTraversal(root: TreeNode | null): number[] {
    return returnInorderTraversal(root)
};

const returnInorderTraversal = (root: TreeNode | null): number[] => {
    let pointer = root
    let stack = [];    
    var result = [];

    while (pointer || stack.length) {
        while (pointer) {
          stack.push(pointer);
          pointer = pointer.left;
        }
        pointer = stack.pop();
        result.push(pointer.val);
        pointer = pointer.right;
    }

    return result;
}