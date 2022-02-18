/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    //if stairs was 1 step, only one way

    let arr = new Array(n);
    arr[0] = 1;
    arr[1] = 2;
    arr[2] = 3;
    if(n<3){
        return arr[n-1];
    }

    for(let i=2 ; i<n; i++){
        //option 1: start from two steps behind current step, and add 2
        //option 2: start from one step behind and add 1
        arr[i] = arr[i-1]  + arr[i-2] ;
    }
    return arr[n-1];
};

let n = 4;
console.log(climbStairs(n));