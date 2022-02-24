/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
     let result = 0;
     let left =0;
     let right = 0;
     while(right < nums.length-1){
        let farthestJump = 0;
        for(let i = left; i<= right; i++){
            farthestJump = Math.max(farthestJump, i + nums[i]);
        }
        console.log(farthestJump);
        left = right + 1;
        right = farthestJump;
        result += 1;


     }
    return result;

    // //memoization
    // //represents minimum jump required at each step
    // let numJumpsRequired = new Array(nums.length);
    // numJumpsRequired[nums.length - 1] = 0;

    // if(nums.length > 1 ){
    //     if(nums[nums.length - 2] > 0){
    //         numJumpsRequired[nums.length - 2] = 1;
    //     }
    //     else{
    //         numJumpsRequired[nums.length - 2] = 0;
    //     }
        
    // }

    // if(nums.length < 3){
    //     return numJumpsRequired[0];
    // }
    // console.log(numJumpsRequired)
    // //work from end of array -> index 0;
    // for(let i = nums.length - 3; i >=0; i--){
    //     //if 0, can't jump anywhere
    //     if(nums[i] == 0){
    //         numJumpsRequired[i] = 0;
    //         continue;
    //     }
    //     //jumping options 
    //     let min = 50000;
    //     let jumpPossible = false;
    //     for(let jump = 1; jump <= nums[i]; jump++){
    //         if(i + jump >= nums.length){
    //             continue;
    //         }
    //         else{
    //             //check to see if that location is 0
    //             if(numJumpsRequired[i+jump] == 0 && i+jump != nums.length-1){
                
    //                 continue;
    //             }
    //             else{
    //                 console.log( "i " + i, "current " + numJumpsRequired[i+jump])
    //                 min = Math.min(1 + numJumpsRequired[i+jump], min);
    //                 jumpPossible = true;
    //             }

    //         }
    //     }
    //     console.log( "i " + i, "min " + min)
    //     //store the lowest possible jump
    //     if(jumpPossible){
    //         numJumpsRequired[i] = min;
    //     }
    //     else{
    //         numJumpsRequired[i] = 0;
    //     }
    // }

    // console.log(numJumpsRequired)
    // return numJumpsRequired[0];

    

};


let nums = [2,3,1,1,4]
let nums1 = [2,3,0,1,4];

//     2     3    1     1    4



console.log(jump(nums));
console.log(jump(nums1));