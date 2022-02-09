let groupAnagrams = (strs) => {
    let map = new Map();

    for(let i=0; i<strs.length; i++){
        let word = strs[i];
        let wordArr = word.split("");
        let sortedWord = wordArr.sort().join("");
        
        if(map.has(sortedWord)){
            map.get(sortedWord).push(word);
        }
        else{
            let arr = [word];
            map.set(sortedWord, arr);
        }

    }
    return Array.from(map.values());



}
let strs = ["eat","tea","tan","ate","nat","bat"];

groupAnagrams(strs);