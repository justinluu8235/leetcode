var isPalindrome = function(s) {

    s = s.toLowerCase()
   
    let left = 0;
    let right = s.length - 1;
    while(left<right){
        //if left if alphanumeric, increment
        if(s[left].match(/^[0-9a-z]+$/) == null){
            left++;
            continue;
        }

        //if right if alphanumeric, increment.
        if(s[right].match(/^[0-9a-z]+$/) == null){
            right--;
            continue;
        }
        //otherwise, check if they match
        if(s[left] != s[right]){
            return false;
        }

        //increment both
        left++;
        right -- ;

    }




    return true;
};


let s = "A man, a plan, a canal: Panama"

console.log(isPalindrome(s));