/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
     //map
     //key - number 
     //value - index


    // let map = new Map();
    // for(let i = 0; i<nums.length; i++){
    //     map.set(nums[i], i);
    // }
    // console.log(map);

    // for(let i =0; i<nums.length; i++){
    //     if(map.has(target - nums[i]) && map.get(target - nums[i]) != i){
    //         return [i, map.get(target - nums[i])]
    //     }
    // }

    let map = new Map();
    for(let i = 0; i<nums.length; i++){
        if(map.has(target - nums[i]) && map.get(target - nums[i]) != i){
            return [i, map.get(target - nums[i])]
        }
        else{
            map.set(nums[i], i);
        }
        
    }



    
};

let nums = [2,7,11,15]

let target = 13;


console.log(twoSum(nums, target));