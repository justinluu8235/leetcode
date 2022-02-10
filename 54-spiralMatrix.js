let spiralOrder = function(matrix) {
    let rowsLen = matrix.length;
    let columnsLen = matrix[0].length;
    let result = [];

    //boundaries - initial
    let up = 0;
    let down = rowsLen - 1;
    let left = 0;
    let right = columnsLen - 1;
    
    while(result.length < rowsLen * columnsLen){
        //right
        for(let col = left; col<=right; col++){
            result.push(matrix[up][col]);
        }

        //down
        for(let row = up + 1; row<=down; row++){
            result.push(matrix[row][right]);
        }
        
        //Making sure we are on diff row
        if(up != down){
            //left
            for(let col = right - 1; col>=left; col -- ){
                result.push(matrix[down][col]);
            }
        }

        //Making sure we are on diff column
        if(left != right){
            //up
            for(let row = down - 1; row>up; row -- ){
                result.push(matrix[row][left]);
            }
        }

        left ++;
        right--;
        up++;
        down--;

    }
    return result;
};

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];


console.log(spiralOrder(matrix))