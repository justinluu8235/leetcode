/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 let rotate = function(matrix) {
    //temp1Arr - length n 
    //temp2Arr - length n
    //n=4
    //i,j -> j, n-1-i
    //1,0 -> 0, 2
    //2, 1 -> 1, 1;
    //3,3 -> 3, 0

    //1,0 -> 0, n-1 -1 

    let queue = [[0,0]];

    
    let map = new Map();


    let n = matrix.length;

    for(let i=0; i< matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            let displaceNumber = matrix[i][j];
            let rotated = false;
            let row = i;
            let column = j;
            while(!rotated){
                if(map.has(String(row) + " " + String(column))){
                    break;
                }
                map.set(String(row) + " " + String(column), true);
                
                //take the number and translate its coordinate
                let translatedColumn = n-1-row; 
                let translatedRow = column;
                
                //go to that coordinate, and save that number 
                let temp = matrix[translatedRow][translatedColumn];

                //replace that number 
                matrix[translatedRow][translatedColumn] = displaceNumber;

                displaceNumber = temp;
                row = translatedRow;
                column = translatedColumn;

            }
        }
    }
    console.log(matrix);
    
};

let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
rotate(matrix);