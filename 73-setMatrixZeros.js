let setZeroes = function(matrix) {

    //map for column and rows to not hit them again
    let columnMap = new Map();
    let rowMap = new Map();

    //loop through once 
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
        //if i, j is 0, add the i to the row map, and j to the column map
            if(matrix[i][j] == 0){
                columnMap.set(j, true);
                rowMap.set(i, true);
            }
        }
    }
    console.log(columnMap);
    console.log(rowMap);
    //loop through the rows
    for(let i=0; i<matrix.length; i++){
        //loop through the column s 
        for(let j=0; j<matrix[i].length; j++){
            //if i or j is in row/column map, make it 0 and continue. 
            if(columnMap.get(j) || rowMap.get(i)){
                matrix[i][j] = 0;
            }
        
        }
    }
        
       

            
    return matrix;            

    
};

let matrix = [[1,1,1],[1,0,1],[1,1,1]];
let matrix1 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]

console.log(setZeroes(matrix));

console.log(setZeroes(matrix1));