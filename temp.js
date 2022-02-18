

// let mergeSort = (arr, count) => {
//     //base case - stops the splitting 
//     if(arr.length<2){
//         return arr;
//     }
//     //split up array 
//     let mid = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));
    
    
//     return merge(left, right)
    
// }


// let merge = (left, right) => {
//     let sortedArr = [];
//     //while both arrays not empty
//     while(left.length > 0 && right.length > 0){
//         //remove value from smaller , and add to sorted Arr
//         if(left[0] < right[0]){
//             sortedArr.push(left.shift());
//         }
//         else{
//             sortedArr.push(right.shift());
//             console.log("Hello", count);
//             count++;
//             console.log("Hello", count);
//         }
//     }
//     //add whatever remains 
//     return sortedArr.concat(left.slice().concat(right.slice()));

// }

// let count = 0;
// function largestCountValue(a) {
//     // Write your code here
//     if(a.length < 2){
//         return 0;
//     }
//     count = 0;
//     let merged = mergeSort(a);
//     console.log(merged);
    
//     return count;
// }


// let arr = [2,1,3];

// console.log(largestCountValue(arr));
// const axios = require('axios');
// async function getCapitalCity(country) {
//     let url = `https://jsonmock.hackerrank.com/api/countries?name=${country}`;

    // try{
    //     let response = await axios.get(url);
    //     response = response.data.data;
    //     if(response.length == 0){
    //         return - 1;
    //     }
    //     let capital = response[0]['capital'];
    //     return capital;
    // }
    // catch(err){
    //     console.log(err);
    // }
//     axios.get(url)
//     .then((response) =>{
//         response = response.data.data;
//         if(response.length == 0){
//             return - 1;
//         }
//         let capital = response[0]['capital'];
        
//         return capital;
//     });
// }
// let result = getCapitalCity("China");
// console.log(result);

// let foo = 101;
// function func1(){
//     return function(){
//         console.log(foo);
//     }
//     let foo = 202;
// }
// let func2 = func1();
// func2();


// (function immediateFoo(foo){
//     return(function immediateBar(bar){
//         console.log(foo);
//     })(25);
// })(40);


// Promise.resolve('200!')
// .then(() => {
//     throw Error('Help!');
// })
// .catch(error => {
//     return 'success'
// })
// .then(data => {
//     throw Error ('Data failed!');
// })
// .catch(error => {
//     console.log(error.message);
// })

// let foo = new Promise ((resolve, reject) => {
//     reject(Error('Send Help SOS!'));
// })
// foo.catch(error => {
//     console.log(error.message);
// })
// foo.catch(error => {
//     console.log(error.message);
// })

// const num1 = function (foo = 110, bar = 201){
//     return foo+bar;
// }

// const num2 = ([foo, bar] = [110, 201]) => foo+bar;
// console.log(num1());
// console.log(num2());

// let a = 1000;
// function foo(){
//     let a  = 1001;
//     function bar(){
//         a++;
//         let a = 1010;
//         console.log(a);
//     }
//     bar();
// }
// foo();



function largestCountValue(a) {
    // Write your code here
    if(a.length < 2){
        return 0;
    }
    count = 0;
    mergeSort(a);
    
    return count;
}

let mergeSort = (arr) => {
    //base case - stops the splitting 
    if(arr.length<2){
        return arr;
    }
    //split up array 
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    
    
    return merge(left, right)
    
}


let merge = (left, right) => {
    let sortedArr = [];
    console.log(left);
    //while both arrays not empty
    let leftMerged = false;
    while(left.length > 0 && right.length > 0){
        //remove value from smaller , and add to sorted Arr
        if(left[0] < right[0]){
            sortedArr.push(left.shift());
            leftMerged = true;
        }
        else{
            sortedArr.push(right.shift());
            if(!leftMerged){
                count++;
            }
            
        }
    }
    //add whatever remains 
    return sortedArr.concat(left.slice().concat(right.slice()));

}

let arr = [1,2,3,4,5,10];
let arr1 = [2,1,4,3,2];
console.log(largestCountValue(arr));
console.log(largestCountValue(arr1));