/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

let set;
let board1;
let word1;
 var exist = function(board, word) {
    board1 = board;
    word1 = word;
     set = new Set();
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(board[i][j] == word[0]){
                if(dfs(i, j, 0)){
                    return true;
                }
            }
        }
    }
    console.log("no matches");
    return false;
};

let dfs = (row, column, i) => {
    //check if we're done
    if(i >= word1.length ){
      
        return true;
    }

    //check bounds and if we've already visited
    if(row < 0 || column < 0 || row >= board1.length 
        || column >= board1[0].length || 
        set.has(String(row) + " " + String(column))
        ){
 
        return false;
    }
    
    //check if letter matches
    if(board1[row][column] != word1[i]){
        return false;
    }

    
    console.log("row ", row);
    console.log("column ", column);
    console.log("Index", i);
    set.add(String(row) + " " + String(column));

    //top
    let top = dfs(row - 1, column, i+1);
    //bottom 
    let bottom = dfs(row + 1, column, i+1);
    //left 
    let left = dfs(row, column-1, i+1);
    //right 
    let right = dfs(row, column+1, i+1);



    set.delete(String(row) + " " + String(column));

    if(left || right || bottom || top){
        return true;
    }

    return false;


}

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];

let  word = "ABCCED";




let board2 = [["a"]];
let word2 = "a";

// console.log(exist(board, word));

console.log(exist(board2, word2));