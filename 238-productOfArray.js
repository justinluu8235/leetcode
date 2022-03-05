/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    //figure out how many zeroes, and the initial product
    let numZeros = 0;
    let initialProduct = 1;
    for(let i =nums.length - 1; i>=0 ; i--){
        if(nums[i] == 0){
            numZeros ++;
        }
        else if(i>0){
            initialProduct *= nums[i];
        }
    }

    console.log(numZeros);
    console.log(initialProduct);


    let result = new Array(nums.length);
    result.fill(0);
    
    if(numZeros >= 2){
        return result;
    }
    else if(numZeros == 1){
        let zeroIndex = -1;
        let total = 1;
        for(let i=0; i<nums.length; i++){
            if(nums[i] ==0){
                zeroIndex = i
            }
            else{
                total *= nums[i];
            }
        }
        result[zeroIndex] = total;
        return result;

    }
    else{
        result[0] = initialProduct
        for(let i=1; i<nums.length; i++){
            result[i] = (result[i-1]/nums[i]) * nums[i-1]
        }
    }
    return result;

};

let nums = [1,2,3,4];

console.log(productExceptSelf(nums));

