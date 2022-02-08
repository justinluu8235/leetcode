let lengthOfLongestSubstring = function(s) {
    

    let obj = {};
    let max = 0;
    let counter = 0;

    for(let left = 0; left<s.length; left++){
        
        //check if left letter is in the object, if it is 
        if(obj[s[left]] != undefined){
            console.log(s[left])
            //reset the counter
            //reset the obj
            max = Math.max(counter, max);
            counter = 0;
            
            left = obj[s[left]] + 1;
            obj = {};
        }
            
        obj[s[left]] = left;
        counter++;
        
    }  
    max = Math.max(counter, max); 

    return max;
    
};



let s = "abcabcbb";
let s1 = " ";
let s2 = "pwwkew";
console.log(lengthOfLongestSubstring(s));


console.log(lengthOfLongestSubstring(s1));

console.log(lengthOfLongestSubstring(s2));