/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    let result = [];
    let set = new Set();
    let list = [];
    candidates.sort((a,b) => {
        return a-b;
    })
    dfs(target, candidates, list, 0,  result);
    return result;
};

//1, 1, 2, 5, 6, 7

//dfs(8,  ,  [], 0, [] , []);
//df 
let dfs = (target, candidates, list, startIndex, result) => {
    if(target == 0){
        let copy = JSON.parse(JSON.stringify(list));
        result.push(copy);
        return;
    }
    if(target < 0){
        return;
    }
   let prev = - 1;
    for(let i=startIndex; i< candidates.length;i++){ // 0 
        if(candidates[i] == prev ){   
            continue;
        }
        else{
        
            list.push(candidates[i]); 
            //if successful combination is found, add to list 
            dfs(target - candidates[i], candidates, list, i+1, result);
      
            list.pop()       
            prev = candidates[i];
        }
    }


}



let candidates = [10,1,2,7,6,1,5];
let target = 8;
console.log(combinationSum2(candidates, target))

// recursion to test each condition  (target, indexOfCand, result)

