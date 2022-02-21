/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var getSum = function(a, b) {
    if (b == 0) {
        return a;
    } else {
        return getSum(a ^ b, (a & b) << 1)
    }
};

let a = 9;
let b = 11;
console.log(getSum(a, b))