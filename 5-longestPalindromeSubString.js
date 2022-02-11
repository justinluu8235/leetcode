/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let max = -1;
    let result = "";

    if(s.length < 2){
        return s;
    }
    

    for(let i=0; i<s.length; i++){
        let currLetter = s[i];
        //odd
        let right = i+1;
        let left = i - 1;
        while(true){
            if(right > s.length-1 || left < 0){
                break;
            }
            //for each letter, check the two sides of it
            if((s[right]) === (s[left])){
                //keep a count of how far you are going out. 
                if(right - left + 1>max){
                    max = right - left + 1;
                    result = s.slice(left, right+1);
                }
                right++;
                left -- 
            }
            //if the two sides are not the same, ;
            else{
                break;
            }
        }
        //even
        let right1 = i+1;
        let left1 = i;
        while(true){
            if(right1 > s.length-1 || left1 < 0){
                break;
            }
            //for each letter, check the two sides of it
            if((s[right1]) === (s[left1])){
                //keep a count of how far you are going out. 
                if(right1 - left1 + 1>max){
                    max = right1 - left1 + 1;
                    result = s.slice(left1, right1+1);
                }
                right1++;
                left1 -- 
            }
            //if the two sides are not the same, ;
            else{
                break;
            }
        }
    }
    
    if(max == -1){
        return s[0];
    }
    return result;




};

// let isPanlindrome = (string) =>{
//     for(let i=0; i<string.length/2; i++){
//         if(string[i] != string[string.length - 1 - i]){
//             return false;
//         }
//     }
//     return true;
// }

let s = "babad"
console.log(longestPalindrome("ac"))