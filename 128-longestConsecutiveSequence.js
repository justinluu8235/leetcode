let longestConsecutive = (nums) => {

    //Base case - if length 0, return 0;
    if(nums.length == 0){
        return 0 ;
    }

    let set = new Set();
    for(let num of nums){
        set.add(num);
    }  
    let result = 1;
    for(let currNum of nums){
        //intialize counter
        let counter = 1;
        //if this number is the beginning of a sequence (no num-1 in set)
        if(!set.has(currNum-1)){
            //while loop
            while(true){
                //if set contains (num+1)
                if(set.has(currNum+1)){
                    //currNum +1 
                    currNum ++;
                    //counter ++
                    counter ++;
                    //check max
                    result = Math.max(result, counter);

                }
                else{
                    break;
                }
                    
            }
        }
    }
    return result;

}


let nums = [100,4,200,1,3,2];
let nums1 = [0,3,7,2,5,8,4,6,0,1]
console.log(longestConsecutive(nums))
console.log(longestConsecutive(nums1))