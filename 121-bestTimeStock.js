/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let max = 0;
    let maxes = [];
    let localMax = -1;
    // create a array indicating maxes after the index
    for(let k = prices.length - 1; k>=0; k--){
        localMax = Math.max(localMax, prices[k]);
        maxes[k] = localMax;
    }
    //loop through potential buy prices, and subtract from highest sell price. track max profit
    for(let i =0; i<prices.length; i++){
        max = Math.max(max, maxes[i] - prices[i])
    }
    
    return max;
};

let prices = [7,1,5,3,6,4];

console.log(maxProfit(prices));




[7,1,5,3,6,4]


//    7   1  5  3    6     4 
//    7   6  6  6    6   4
//     7   6   6  6  6   4

//currently at 1 
