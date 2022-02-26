/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {

    let dp = new Array(s.length +1 );
    for(let i=0 ;i<dp.length; i++){
        dp[i] = -1;
    }
    dp[0] = 1;

    decode(s, s.length, dp);
    console.log(dp);
    return dp[s.length];

};

let decode = (s, numFromEnd, dp) => {   // 2     [1, -1, -1, -1]
    
    //reached the end
    if(numFromEnd == 0){
     
        return 1;
    }
    let index = s.length - numFromEnd;   //0 
    console.log(typeof(s[index]));
    //if leading 0 substring, then that substring has zero ways of splitting 
    if(s[index] == "0"){
        dp[numFromEnd] = 0;
        return 0;
    }
    else if(dp[numFromEnd] != -1){
        
        return dp[numFromEnd];
    }
   
    //two options - recursive split current digit to be a single digit, or split a pair two under 26
    let result = -1;

    if(numFromEnd >= 2 && parseInt(String(s[index] + s[index+1])) < 27){
       
        result = decode(s, numFromEnd - 1, dp)  + decode (s, numFromEnd - 2, dp);   //2     1
    }
    else{
        result = decode(s, numFromEnd - 1, dp)
    }
    console.log(dp);
    console.log(numFromEnd, result);
    dp[numFromEnd] = result;
    return result;

}



let s = "06";


console.log(numDecodings(s));