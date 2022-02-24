/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {

    if(nums.length == 0){
        return 0;
    }
    else if(nums.length == 1){
        return nums[0];
    }


    let twoAgoMax = 0;
    let oneAgoMax = 0;
    let max = 0;
    for(let i =0 ; i<nums.length-1; i++){
        let temp = Math.max(twoAgoMax + nums[i], oneAgoMax);
        twoAgoMax = oneAgoMax;
        oneAgoMax = temp;

    }
    max = oneAgoMax;
    oneAgoMax = 0;
    twoAgoMax = 0;
    for(let i =1 ; i<nums.length; i++){
        let temp = Math.max(twoAgoMax + nums[i], oneAgoMax);
        twoAgoMax = oneAgoMax;
        oneAgoMax = temp;

    }

    return Math.max(max, oneAgoMax);


    
};

let nums = [2,3,2];

console.log(rob(nums));