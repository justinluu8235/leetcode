/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    let result = [];
    //sort intervals
    intervals.sort((a,b) => {
        return a[0] - b[0];
    })
    let currentInterval = intervals[0];
    //for each interval
    for(let i=1; i<intervals.length; i++){
        let interval = intervals[i];
        //if overlapping, merge them by finding minimum of start, and max of end. set current to merged

        if(interval[0] <= currentInterval[1]){
            currentInterval[0] = Math.min(currentInterval[0], interval[0]);
            currentInterval[1] = Math.max(currentInterval[1], interval[1]);
        }
        //if not overlapping, add current to list, and set next to current
        else{
            result.push(currentInterval);
            currentInterval = interval;
        }

    }
    result.push(currentInterval);
   return result;
};

let intervals = [[1,3],[2,6],[8,10],[15,18]];
let intervals1 = [[1,4],[0,0]]
console.log(merge(intervals));
console.log(merge(intervals1));