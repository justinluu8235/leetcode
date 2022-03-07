/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {

    let combinations = new Array(text1.length);
    for(let i =0; i<combinations.length; i++){
        let array  = new Array(text2.length);
        array.fill(-1);
        combinations[i] = array;
    }

    

    comboSolve(0,0, text1, text2, combinations);
    console.log(combinations)
    return combinations[0][0];
    
};

let comboSolve = (index1, index2, text1, text2, combinations) => {
    console.log(index1, index2);
    if(index1 >= text1.length || index2 >= text2.length){
        return 0;
    }
    else if(combinations[index1][index2] != -1){
        return combinations[index1][index2];
    }

    if(text1[index1] == text2[index2]){
        combinations[index1][index2] = 1 + comboSolve(index1+1 , index2 +1, text1, text2, combinations)
    }
    else{
        combinations[index1][index2] = Math.max(comboSolve(index1+1, index2, text1, text2, combinations), comboSolve(index1, index2+1, text1, text2, combinations))
    }

    return combinations[index1][index2];


}

let text1 = "pmjghexybyrgzczy";
let text2 = "hafcdqbgncrcbihkd" 

console.log(longestCommonSubsequence(text1, text2));
