/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    //cant run through intervals without it being sorted
    intervals.sort((a, b) => {
        return a[0] - b[0];

    })
    console.log(intervals);

    let result = [];

    let currentInterval = intervals[0];

    for(let i=1; i<intervals.length; i++){
        //if overlapping with currentInterval, merge them. 
        //overlapping -> intervals[0] <= currentInterval[1];
        if(intervals[i][0] <= currentInterval[1]){
            //merge
            currentInterval[0] = Math.min(currentInterval[0], intervals[i][0]);
            currentInterval[1] = Math.max(currentInterval[1], intervals[i][1]);

        }
        else{
        //if not, add current interval to result, update current interval to new interval
        result.push(currentInterval);
        currentInterval = intervals[i];
        }
    }
    //last current interval still needs to be added
    result.push(currentInterval);
    return result;
};

let intervals = [[1,3],[2,6],[8,10],[15,18]];
let intervals1 = [[1,4],[0,0]]
console.log(merge(intervals));
console.log(merge(intervals1));