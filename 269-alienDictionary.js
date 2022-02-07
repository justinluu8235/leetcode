
let string = "";
let map = new Map();
let visitMap;


let alienOrder = (words) => {
    //adjaceny list of characters and set of that going after it
    for(let i=0; i<words.length; i++){
        let word = words[i];
        for(let j=0; j<word.length; j++){
            let char = word[j];
            let set = new Set();
            map.set(char, set);
        }
    }

    
    //go through the words and make sure they are valid (if w1 is longer than w2 and w2 is prefix of w1)
    for(let i=0; i<words.length-1; i++){
        let word1 = words[i];
        let word2 = words[i+1];
        let minLength = Math.min(word1.length, word2.length);
        let prefix = true;
        for(let j=0; j<minLength; j++){
            if(word1[j] != word2[j]){
                prefix = false;
            }
        }
        //if no mis-matched letters, then prefix
        if(prefix && word1.length > word2.length){
            return "";
        }
        //build the adjacency list by finding the mismatched letters
        for(let j=0; j<minLength; j++){
            if(word1[j] != word2[j]){
               let preLetter = word1[j];
               let postLetter = word2[j];
               let set = map.get(preLetter);
               set.add(postLetter);
               map.set(preLetter, set);
               break;
            }
        }
    }



    //use another hashmap to track the letters we have already visited
     visitMap = new Map();
   
    for(let char of map.keys()){
       if(dfs(char)){
           return "";
       }
    }

    //run dfs onall the letters and have it append to string
    string = string.split('').reverse().join('');
    return string;

}

let dfs = (letter) => {
    //if we already visited this chatacter, return true whether its been viewed, or false currently tracked
    if(visitMap.has(letter)){
        return visitMap.get(letter);
    }
    //track the letter as visited to track circular logic
    visitMap.set(letter, true);
    //go through the adjacency list for this character to check for circular logic
    let set = map.get(letter);
    for(let adjLetter of set){
        if(dfs(adjLetter)){
            return true;
        }
    }
    //once visited letters are visited, you're done tracking this letter
    visitMap.set(letter, false);
    //append to string
    string += letter;
    return false;
}

let words = ["wrt","wrf","er","ett","rftt"]
let words1 = 
["z","x"];
// console.log(alienOrder(words));
console.log(alienOrder(words1))