

// let applyTax = (dollarArr, tax) => {
//     return dollarArr.map((dollar) => {
//         return Math.round(dollar * tax )
//     })
// }


// let dollarArr = [50.29, .89];
// let tax = 9.12;
// console.log(applyTax(dollarArr, tax));



// let shuffleDeck = (deck) => {
//     let deckSize = deck.length;
//     let shuffledArr = new Array(deckSize)

//     for(let i = 0; i<deckSize; i++){
//         let card = deck[i];
//         let randomIndex = Math.floor(Math.random() * (deckSize))
//         //if that slot is taken, try another random int
//         while(shuffledArr[randomIndex] != undefined){
//             randomIndex = Math.floor(Math.random() * (deckSize))
//         }

//         shuffledArr[randomIndex] = card;

//     }
//     return shuffledArr;

// }

// let deck = ['A',1,2,3,4,5,6,7,8,9,10,'J','K','Q'];
// console.log(shuffleDeck(deck));


// let map = new Map();
// map.set('a', 1)
// map.set('e', 2)
// map.set('i', 3)
// map.set('o', 4)
// map.set('u', 5)
// let scoreVowels = (s) => {
//     // s = s.toLowerCase();
//     let score = 0;
//     for(let i=0; i<s.length; i++){
//         if(map.get(s[i]) == undefined){
//             continue;
//         }
//         score = score + map.get(s[i]);
//         console.log(score);
//     }
    
// }

// let s = "Welcome to Indonesia";
// scoreVowels(s);


// let map = new Map();
// map.set('a', 1)
// map.set('e', 2)
// map.set('i', 3)
// map.set('o', 4)
// map.set('u', 5)

// let recursiveScoreCount = (s,i) => {

//     if(i > s.length-1){
//         return 0;
//     }
//     if( map.get(s[i]) == undefined){
//         return 0 + recursiveScoreCount(s, i+1);
//     }
//     else{
//         return map.get(s[i]) + recursiveScoreCount(s, i+1);
//     }
    


// }


// let s = "Welcome to Indonesia";
// console.log(recursiveScoreCount(s, 0));

const checkAmazingWords =  (word) => {
    if(word.length < 4 || word.length > 9){
return "length of word has to be between 4 and 9 letters";
}
else{
    if(word.includes("odoo")){
        return "yes"
    }

}
    
    }


    console.log(checkAmazingWords("odosd"))