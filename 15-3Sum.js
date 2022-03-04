/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
     let result = []
    nums.sort((a, b) =>{
        return a - b;
    })

    //find inflection point 
    let lastNegativeIndex = -1;
    for(let i = 0; i<nums.length - 1; i++){
        if(nums[i+1] >= 0 ){
            lastNegativeIndex = i;
        }
    }
    
    //if still -1 , all negatives, cant balance
    if(lastNegativeIndex == -1){
        return [];
    }
    
    for(let i =0; i<= lastNegativeIndex; i++){
        if(i>0 && nums[i] == nums[i-1]){
            continue;
        }
        let numToFind = nums[i] * - 1;
        let matches = twoSum(numToFind, i, nums);
        console.log(matches);
        for(let j =0; j<matches.length; j++){
            matches[j].push(nums[i]);
            result.push(matches[j]);
        }
       
    }


    return result;
};

//return a pair of two numbers equal to input
let twoSum = (sumTarget, index, nums) => {
    let left = index + 1;
    let right = nums.length - 1;
    let sum; 
    let result = []
    while(left < right){
        sum = nums[left] + nums[right];
        if(sum > sumTarget){
            right --;
        }
        else if(sum < sumTarget){
            left++;
        }
        else{
            result.push([nums[left], nums[right]]);
            
            left++;
            while(nums[left] == nums[left-1]){
                left++;
            }
        }
    }
    return result;

}



let nums = [-1,0,1,2,-1,-4];


console.log(threeSum(nums));