
let list;
var MedianFinder = function() {
    list = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {

  
    //binary search 
    //find the index that is >= number and i-1  < number 
    let left =0;
    let right = list.length - 1;
    if(num <= list[left]){

        list.unshift(num);
        return;
    }
    else if(list.length == 0 ||num >= list[right]  ){

        list.push(num);
        return;
    }

    let added = false;
    while(left <= right){
        console.log('hello')
        let mid = Math.floor((left + right) / 2);
        console.log(mid);
        //base case 
        //check if middle meets condition 
        if(list[mid] >= num  && mid-1 >=0 && list[mid - 1] < num ){
            //if it does, then insert at that location 
            //break
            added = true;
            list.splice(mid, 0, num);
            break;
        } 
        //otherwise if number >= mid move left up
        else if(list[mid] < num ){
            left = mid + 1;
        }
        //otherwise move right down 
        else{
            right = mid - 1;
        }

    }

   
    
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    //if odd
    let length = list.length;
    if(length % 2 == 1){
        return list[(length - 1)/2]
    }
    else{
        return (list[length/2] + list[length/2 - 1]) / 2
    }

    
};

MedianFinder.prototype.getList = function() {
    return list;
};

let obj = new MedianFinder();
obj.addNum(1);
obj.addNum(5);
obj.addNum(3);
obj.addNum(2);
obj.addNum(6);
obj.addNum(-1);
console.log(obj.getList())
console.log(obj.findMedian())