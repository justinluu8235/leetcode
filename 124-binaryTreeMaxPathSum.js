/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let result = 0;
let maxPathSum = function(root) {
    result = root.val;
    dfs(root);
    return result;
};

let dfs = (node) => {
    //base case: if null, return 0;
    if(node == undefined){
        return 0;
    }

    //find max at left
    let leftVal = dfs(node.left);
    
    //find max at right
    let rightVal = dfs(node.right);

    //if the max is negative, make it 0 so its like we're not using the path
    leftVal = Math.max(leftVal,0);
    rightVal = Math.max(rightVal, 0);
    
    //pretend this is the root and we stop path here, which means we can be in the middle of left and right 
    //not worried about node.val beign negative, because we've done this same thing when left or right was root
    result = Math.max(result, leftVal + rightVal + node.val);

    //when we return, we can only pick one path
    return node.val + Math.max(leftVal, rightVal);




}





class TreeNode{
    val;
    right;
    left;
    constructor(val, left, right){
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

let root = new TreeNode(-10);
let node1 = new TreeNode(9);
let node2 = new TreeNode(20);
let node3 = new TreeNode(15);
let node4 = new TreeNode(7);
root.left = node1;
root.right = node2;
node2.left = node3;
node2.right = node4;

console.log(maxPathSum(root));