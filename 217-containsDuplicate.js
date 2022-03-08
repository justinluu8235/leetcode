/**
 * @param {number[]} nums
 * @return {boolean}
 */
//  var containsDuplicate = function(nums) {

    let set = new Set();
    for(let i=0; i<nums.length; i++){
        console.log(set);
        if(set.has(nums[i])){
            return true;
        }
        set.add(nums[i])

    }
    return false;
};





let nums = [1,2,3,1];
let nums1 = [1,2,3,4]

console.log(containsDuplicate(nums));