/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    let resultArr = [];
    // for(let i=1; i<=n; i++){
        traverse([], resultArr , k , 1, n);
    // }
    
    return resultArr;
    
};

let traverse = (currentArr, resultArr, k, index, n) => {

    //base case
    if(currentArr.length == k){
  
        resultArr.push(currentArr.slice());
        return; 
    }

    

    for(let i = index  ; i<=n; i++){
        currentArr.push(i);
       
        traverse(currentArr, resultArr, k, i+1, n);
      
        currentArr.pop();

    }

    return;

}



let n = 4;
let k = 2;


console.log(combine(n, k));
