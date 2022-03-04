/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    
    let left = 0;
    let right = nums.length - 1;
    let i = 0;
    while(i<=right){
        if(nums[i] == 0){
            let temp = nums[i];
            nums[i] = nums[left];
            nums[left] = temp;
            left ++;

        }
        else if(nums[i] == 2){
            let temp = nums[i] 
            nums[i] = nums[right];
            nums[right] = temp;
            right --;
            i --;
        }
        i++;


    }


};

let nums = [2,0,2,1,1,0];


sortColors(nums);
console.log(nums)