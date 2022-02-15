/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
     let map = new Map();
     //builkd map of frequencies
    for(let i =0; i< nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1);
        }
        else{
            map.set(nums[i],1);
        }
    }

    let result = [];
    let freqArr = [];
    for(let i=0; i<nums.length; i++){
        freqArr.push([]);
    }
    for(let key of map.keys()){
        let frequency = map.get(key);
        freqArr[frequency - 1].push(key);
    }
    console.log(freqArr);



    for(let i = freqArr.length - 1; i>= 0 ; i--){


        while(freqArr[i].length > 0 && result.length < k){
            let popped = freqArr[i].pop()
            console.log(popped)
            result.push(popped)
        }
        if(result.length == k ){
            break;
        }
    }
 console.log(result)
    return result;


};

let nums = [1,1,1,2,2,3], k = 2;

topKFrequent(nums, k);
