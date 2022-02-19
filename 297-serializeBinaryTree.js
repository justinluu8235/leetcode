/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    //make an array
    let arr = [];
    let traverse = (node) =>{
        let queue = [node];
        //while the queue is not empty
        while(queue.length > 0){
            console.log("hello", queue);
           //take the next in line and add to array 
           node = queue.shift();
            //add the left and right node into the queue
            if(node != null){
                queue.push(node.left);
                queue.push(node.right);
            }
            
            if(node == null){
                arr.push("null");
            }
            else{
                arr.push(node.val);
            }

        }
        
    }
    
    traverse(root);
    console.log(arr);
    let string = '';
    for(let i =0; i<arr.length; i++){
        string = string + String(arr[i]) + "##";
    }
    console.log(string);
    return string;
   
};


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let stringArr = data.split('##');
    
    stringArr.pop();

    
    let rootVal = stringArr.shift()
    let root;
    if(rootVal != "null"){
        root = new TreeNode(rootVal);
    }
    else{
        root = null;
        }
    
    let result = root;

    let queue = [root];
    let node;
    let i = 0;
    while(i < stringArr.length){
         //dequeue and set to node 
         node = queue.shift();

         //pop two to be left and right of the node
         if(node != null){
            let left = stringArr[i];
            i++;
            let right = stringArr[i];
            i++;
            console.log(i);
            if(left != "null"){
                node.left = new TreeNode(left);
            }
            else{
                node.left = null;
            }
            if(right !=  "null"){
                node.right = new TreeNode(right);
            }
            else{
                node.right = null;
            }
            
            

            //add those two nodes to the queeu
            queue.push(node.left);
            queue.push(node.right);

         }         

    }

    return root;
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

class TreeNode{
    left;
    right;
    val;
    constructor(val){
             this.val = val;
             this.left = this.right = null;
    }
}

let root = new TreeNode(-1);
let node1 = new TreeNode(2);
let node2 = new TreeNode(3);
let node3 = new TreeNode(4);
let node4 = new TreeNode(5);
root.left = node1;
root.right = node2;
node2.left = node3;
node2.right = node4;

let string = serialize(root);
let rootCopy = deserialize(string);

console.log('copy', rootCopy);