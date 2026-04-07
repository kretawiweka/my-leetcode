// Last updated: 4/8/2026, 2:06:39 AM
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

function isUnivalTree(root: TreeNode | null): boolean {
    return breadtFirstSearch(root)
};

const breadtFirstSearch  = (root: TreeNode | null): boolean => {
    let queue = [root];
    let currentNode;
    let collector = [];
    
    
    while(queue.length){
        currentNode = queue.shift()
        if(!currentNode){
            continue
        }
        queue.push(currentNode.left)
        queue.push(currentNode.right)
        
        if(!collector.length){
            collector.push(currentNode.val)
         } else{
             if(currentNode.val === collector[0]){
                 collector.push(currentNode.val)
             } else {
                 return false
             }
         }
    }
    
    return true
}