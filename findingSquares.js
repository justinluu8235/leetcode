let string = "ABBA UBBU ALAN ALDA"
console.log(findSquares(string));


function findSquares(string){
    let stringMatrix = string.split(" ")
    for(let i=0; i<stringMatrix.length; i++){
        stringMatrix[i] = stringMatrix[i].split("")
    }
    console.log(stringMatrix);

    // How do you know if something is a square?
    // i, j ==  i, j+x  == i+x, j+x == i+x, j then it's a square
    
    let result = [];
    for(let i=0; i<stringMatrix.length; i++){
        for(let j=0; j<stringMatrix[i].length; j++){
            let row = i;
            let column = j;
            let maxLength = Math.min(grid.length, grid[row].length);
            for(let x = 1; row + x<maxLength; x ++){
            
                if(stringMatrix[row][column] == stringMatrix[row][column + x] &&
                    stringMatrix[row][column] == stringMatrix[row+x][column+x] &&
                    stringMatrix[row][column]== stringMatrix[row+x][column]){
                        console.log('row', row);
                        console.log('column', column)
                        let arr = [String(row) + " " + String(column), String(row) + " " + String(column+x), String(row+x) + " " + String(column+x),String(row+x) + " " + String(column)];
                        
                        result.push(arr);
                    }
                    //Below for finding rotated squares
                    // for (let offset = 0; offset < length; offset++) {
                    //     const topLeft = grid[row][column + offset];
                    //     const topRight = grid[row + offset][column + length];
                    //     const bottomRight = grid[row + length][column + length - offset];
                    //     const bottomLeft = grid[row + length - offset][column];
                    //     if (topLeft === topRight && topLeft === bottomRight
                    //         && topLeft === bottomLeft) {
                    //       squares.push({ row, column, length, offset });
                    //     }
                    //   }
            }



        }
    }

    return result;


}


//for a diamond:

// 0,2      1, 5      4, 4      3, 1 
//          +1, +3    +3, -1    -1, -3
// -3, +1 