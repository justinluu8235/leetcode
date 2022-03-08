/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
     coins.sort((a,b) => {
         return a-b;
     })

    let results = new Array(amount +1 );
    results.fill(amount + 1);
    results[0] = 0;

    for(let i = 1; i<results.length; i++){
        for(let j=0; j<coins.length; j++){
            let remainder = i - coins[j];
            if(remainder >=0){
                let currentCount = 1 + results[remainder];
                results[i] = Math.min(currentCount, results[i]);
            }
            else{
                break;
            }
        }
    }
    
    if(results[amount] > amount){
        return -1;

    }
    else{
        return results[amount]
    }

};



let coins = [1,2,5];
let amount = 11;


console.log(coinChange(coins, amount));

