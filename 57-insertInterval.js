/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {

    let result = [];
    let added = false;
    for(let i=0; i< intervals.length; i++){
        if(added){
            result.push(intervals[i]);
            continue;
        }
        //before
        if(newInterval[1] < intervals[i][0]){
            result.push(newInterval);
            added = true;
            result.push(intervals[i]);
        }
        //after
        else if(newInterval[0] > intervals[i][1]){
            result.push(intervals[i]);
        }

        //conflict/merge
        else{
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);

        }



    }

    if(!added){
        result.push(newInterval);
    }

    return result;
};

let intervals = [[1,3],[6,9]]
let newInterval = [2,5]

console.log(insert(intervals, newInterval));