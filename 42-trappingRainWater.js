/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
     if(height.length < 3){
         return 0;
     }

    //from left -> right
    let left = 0;
    let right = height.length - 1;
    let leftWall = height[left];
    let rightWall = height [right];
    
    let water =0;

    while(left < right){
        if(leftWall < rightWall){
            left += 1;
            leftWall = Math.max(leftWall, height[left]);
            water += leftWall - height[i];
        }
        else{
            right --;
            rightWall = Math.max(rightWall, height[right])
            water += rightWall - height[i];
        }
    }
  
  
    return water;
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1];

console.log(trap(height));
