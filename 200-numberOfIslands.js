let gridInput;
let set;
let numIslands = (grid) => {
    gridInput = grid;
    set = new Set();
    result = 0;
    for(let i=0; i<grid.length; i++){
        for(let j=0 ;  j<grid[i].length; j++){
            if(grid[i][j] == '1'){
                dfs(i,j);
                result ++;
            }
        }
    }
    return result;

}



let dfs = (r, c) =>{

    if(r<0 || c<0 || r==gridInput.length || c == gridInput[0].length || gridInput[r][c] == '0'){
        return;
    }
    
    gridInput[r][c] = '0';
    set.add(String(r) + " " + String(c));

    //top
    if(!set.has(String(r-1) + " " + String(c))){
        dfs(r-1, c);
    }
    //bottom
    if(!set.has(String(r+1) + " " + String(c))){
        dfs(r+1, c);
    }
    //right
    if(!set.has(String(r) + " " + String(c+1))){
        dfs(r, c+1);
    }
    //left
    if(!set.has(String(r) + " " + String(c-1))){
        dfs(r, c-1);
    }
    return;
}


let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

let grid2 = [["1","1","0","0","0"],
             ["1","1","0","0","0"],
             ["0","0","1","0","0"],
             ["0","0","0","1","1"]]

let grid3 = [["0","1","0"],
            ["1","0","1"],
            ["0","1","0"]];


console.log(numIslands(grid3));