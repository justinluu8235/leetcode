/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
 var encode = function(strs) {
    //number of words
    // - start the string with numWords
    //length of the words
    // - followed by lengths of each word
    //positions of the letters
    // - some algorithm to jumble up the words
    // - split the words up by 89

    let numWords = strs.length;
    
    let string = String(numWords)+ ']]'

    for(let i = 0 ; i<strs.length; i++){
        string = string + String(strs[i].length) + ']]'
        console.log(String(strs[i].length))
    }
    string = string + 'dfsdsklgfsdjb'
    for(let i = 0 ; i<strs.length; i++){
       
        string = string + strs[i];
    }
    return string;







};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    let numWords = s.split(']]')[0];
    console.log('mnum words', numWords);
    let letterCountArr = s.split(']]').splice(1,numWords);
    console.log(letterCountArr)
    s = s.split('dfsdsklgfsdjb')[1];
    console.log(s);
    let prevIndex = 0; //start of words
    let wordCount = letterCountArr.length;
    for(let i=0; i<letterCountArr.length; i++){
        console.log( prevIndex)
        let letterCount = parseFloat(letterCountArr[i]);
        let word = s.slice(prevIndex, prevIndex + letterCount);
        prevIndex = prevIndex + letterCount;
        letterCountArr[i] = word;
        console.log( word)
    }
    return letterCountArr;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

let dummy_input = 
["63/Rc","h","BmI3FS~J9#vmk","7uBZ?7*/","24h+X","O "];
let msg = encode(dummy_input);
console.log(msg);
let strs = decode(msg);
console.log(strs);