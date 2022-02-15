/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    let result = s.length;
    let left = 0;
    let right = 0;
    for(let i=0; i<s.length; i++){
        //odd
        left = i-1;
        right = i+1;

        while(true){
            //check bounds
            if(left<0 || right >= s.length){
                break;
            }
            else if(s[left] == s[right]){
                result ++;
                left--;
                right++;
            }
            else{
                break;
            }
        }
        //even
        left = i;
        right = i+1;
        while(true){
            //check bounds
            if(left<0 || right >= s.length){
                break;
            }
            else if(s[left] == s[right]){
                result ++;
                left--;
                right++;
            }
            else{
                break;
            }
        }
    }

    return result;

    
};

let s = "aaa";


console.log(countSubstrings(s));