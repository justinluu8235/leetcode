


let combinationSum = (candidates, target) => {
    let results = [];
    let combination = [];
    backtrack(target, combination, 0, candidates, results);
    return results;
}

let backtrack = (remainder, combination, startIndex, candidates, results) => {
    //we hit the target 
    if(remainder == 0){
        let copy = JSON.parse(JSON.stringify(combination));
        results.push(copy);
        return;
    }
    //exceeded target
    else if(remainder < 0){
        return;
    }

    for(let i = startIndex; i<candidates.length; i++){
        combination.push(candidates[i]);
        backtrack(remainder - candidates[i], combination, i, candidates, results);
        combination.pop();

    }

}


let candidates = [2,3,6,7];

let target = 7;

console.log(combinationSum(candidates, target));
