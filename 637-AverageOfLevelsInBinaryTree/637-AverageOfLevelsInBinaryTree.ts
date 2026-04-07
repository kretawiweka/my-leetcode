// Last updated: 4/8/2026, 2:07:03 AM
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

function averageOfLevels(root: TreeNode | null): number[] {
    return getAverageWithBFS(root)    
};

const getAverageWithBFS = (root: TreeNode | null): number[] => {
    const queue = []
    const averagePerLevel = []
    queue.push(root)    
    while(queue.length) {
        let sum = 0;        
        let levelLength = queue.length;                
        
        for (let a = 0; a < levelLength; a++) {
            let node = queue.shift();                
            
            sum += node.val;
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        averagePerLevel.push(sum / levelLength)
    }
    return averagePerLevel;
}