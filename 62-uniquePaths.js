var uniquePaths = function(m, n) {
    let matrix  = new Array(m);
    for(let i=0; i<matrix.length; i++){
        let columnArr = new Array(n);
        matrix[i] = columnArr;
    }

    //fill right column with 1s
    for(let row=0; row<matrix.length; row++){
        matrix[row][n-1] = 1;
    }
    //fill bottom row with 1s
    for(let column=0; column<matrix[m-1].length; column++){
        matrix[m-1][column] = 1;
    }


    for(let row=m-2; row >=0; row --){
        for(let column = n-2; column >= 0; column --){
            matrix[row][column] = matrix[row+1][column] + matrix[row][column+1];
        }
    }

    

    console.log(matrix);
    return matrix[0][0]
};

let m = 3;
let n = 7;
console.log(uniquePaths(m, n))