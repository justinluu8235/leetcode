/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    //first index is empty string, which is always true
    let dp = new Array(s.length +1);
    dp[0] = true;
    
    //for each substring
    for(let i =0; i<=s.length ; i++){
        //for each combination within a substring 
        for(let j=0; j<i; j++ ){
            if(dp[j] && wordDict.includes(s.substring(j, i))){
                dp[i] = true;
                break;
            }
        }
        if(dp[i] == undefined){
            dp[i] =  false;
        }
    }
    
    return dp[s.length]
};


let s = "applepenapple";
let wordDict = ["apple","pen"]
let s1 = "leetcode";
let wordDict1 = ["leet","code"]
let s2 = "catsandog"
let wordDict2 = ["cats","dog","sand","and","cat"]
console.log(wordBreak(s,wordDict))
console.log(wordBreak(s1,wordDict1))
console.log(wordBreak(s2,wordDict2))
