let characterReplacement = (s, k) => {
    let count = {};
    let max = 0; 
    let left = 0;
    let result = 0;
    //loop through the string;
    for(let i=0; i<s.length; i++){
        let letter = s[i];
    
        //count the letter
        if(count[letter] == undefined){
            count[letter] = 1;
        }
        else{
            count[letter] = count[letter] + 1;
        }
        //loop through the count object to find the most frequent letter
        let frequentLetter;
        let frequentCount = 0;
        for(let letters in count){
            if(count[letters] > frequentCount){
                frequentCount = count[letters];
                frequentLetter = letters;
            }
        }
        
        //if the the window (i - left + 1) minus the most frequent letter is greater than k
        //shift until constraint k is met
        
        while((i-left+1) - frequentCount > k){
            //reduce the count of the letter the left pointer is on
            count[s[left]] = count[s[left]] - 1;
            // we need to shift the left to make the window smaller
            left++;
        }



        //resolve max
        result = Math.max(result, i-left+1);
    }
    return result;
};



let s = "ABAB";
let k = 2;

let s1 = "AABABBA";
let k1 = 1;

let s2 = "ABBB";
let k2 = 2;
console.log(characterReplacement(s, k));
console.log(characterReplacement(s1, k1));
console.log(characterReplacement(s2, k2));