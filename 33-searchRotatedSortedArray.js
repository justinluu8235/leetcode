/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while(left<=right){
        let mid = Math.floor((left + right) / 2);
        console.log(mid)
        if(nums[mid] == target){
            result = mid;
            break;
        }


        //figure out if mid is before or after the inflection point 

        //if mid is before the inflection point 
        if(nums[mid] >= nums[left]){
            //in the up slope before inflection
            if(nums[mid] > target && nums[left] <= target){
                right = mid - 1;
            }
            else{
                left = mid + 1;
            }


        }
        //mid is after inflection point 
    
        else{   
            if(target > nums[mid] && target <= nums[right]){
                left = mid + 1;
            }
            else{
                right = mid - 1;
            }



        }


    }


    return result;

};

// let nums = [4,5,6,7,0,1,2];
// let target = 3
let nums1= [1,3];
let target = 1;

console.log(search(nums1, target));