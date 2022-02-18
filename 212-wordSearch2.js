/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

 let result = [];
 let board1;
 var findWords = function(board, words) {
     result = [];
    board1 = board;
    let root = new TrieNode();
    //create the word tree for efficient searching 
    for(let i=0; i<words.length; i++){
        let word = words[i];
        console.log(word);
        let node = root;
        for(let j=0; j<word.length; j++){
            let letter = word[j];
            
            //if tree already has letter, go to it
            if(node.children.has(letter)){
                node = node.children.get(letter);
            }
            //otherwise create one 
            else{
                let newNode = new TrieNode();
                node.children.set(letter, newNode);
                node = newNode;
            }

        }
        //at the end of the word, mark it with the word
        node.word = word;
    }

    console.log(root.children);
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            let letter = board[i][j];
            //if board letter matches first letter of a word
            if(root.children.has(letter)){
                backtrack(i,j,root);
            }
        }
    }


    return result;
    
};


let backtrack = (row, column, parentNode) => {
    let letter = board1[row][column];
    let currentNode = parentNode.children.get(letter);
    // console.log(currentNode)
    //check if we're at a word
    if(currentNode.word != null){
        console.log(currentNode.word);
        result.push(currentNode.word);
        currentNode.word = null;
    }

    //track visited
    board1[row][column] = '#';

    let rowMods = [-1, 1, 0 , 0 ];
    let columnMods = [0, 0 , 1, -1];
    for(let i=0; i<rowMods.length; i++){
        let newRow = row + rowMods[i];
        let newColumn = column + columnMods[i];

        //check for bounds
        if(newRow < 0 || newColumn < 0 || newRow >= board1.length || newColumn >=board1[newRow].length){
            continue;
        }
        if(currentNode.children.has(board1[newRow][newColumn])){
            backtrack(newRow, newColumn, currentNode)
        }

    }

    //unvisit
    board1[row][column] = letter;


    //remove node if not done with it
    if(currentNode.children.size == 0){
        parentNode.children.delete(letter);
    }


    return;


}






class TrieNode {
    children = new Map();
    word = null;
    constructor(){

    }
}

let board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
let words = ["oath","pea","eat","rain"];

console.log(findWords(board, words))