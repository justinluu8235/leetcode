/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var generateTrees = function(n) {

    return treeGenerator(1, n);
    
};


let treeGenerator = (start, end) => {
    let treePossibilities = [];

    if(start > end){
        treePossibilities.push(null);
        return treePossibilities;
    }

    //go through the possible roots 
    for(let rootVal = start; rootVal <= end; rootVal++){
        //find list of possible roots for left and right of this root 
        let possibleLefts = treeGenerator(start, rootVal - 1);
        let possibleRights = treeGenerator(rootVal + 1, end);
        

        //now we have to connect them based on each combo of left/right
        for(let leftNode of possibleLefts){
            for(rightNode of possibleRights){
                let currentRoot = new TreeNode(rootVal);
                currentRoot.left = leftNode;
                currentRoot.right = rightNode;
                treePossibilities.push(currentRoot);
            }
        }



    }

    return treePossibilities;

}

function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
     }




console.log(generateTrees(3));