// Last updated: 4/8/2026, 2:07:58 AM
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

function invertTree(root: TreeNode | null): TreeNode | null {
    return getInvertTreeA(root)
};

const getInvertTreeA = (root: TreeNode | null): TreeNode | null => {        
    if (root == null) return root;
    
    // [a, b] = [b, a]
    
    [root.left, root.right] = [getInvertTreeA(root.right), getInvertTreeA(root.left)];
    return root;
};

const getInvertTree = (root: TreeNode | null): TreeNode | null => {        
      const stack = [root];
      console.log('stack', stack)
    
      while (stack.length) {
        const node = stack.pop();
        console.log('node', node)
        if (node != null) {
            let left = node.left
            node.left = node.right
            node.right = left
            
            console.log(stack)
            stack.push(node.left, node.right);
        }
      }

      return root;
};