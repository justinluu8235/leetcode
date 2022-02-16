/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {

    if(intervals.length < 2){
        return 0;
    }
    //sort array    
    intervals.sort((a, b) => {
        return a[0] - b[0];
    })
    let count = 0;
    let prevInterval = intervals[0];
    for(let i = 1; i < intervals.length; i++){
        let interval = intervals[i];
        //if overlapping - then "remove"(skip) one of two intervals
        if(prevInterval[1] > interval[0]){
            count++;
            //remove the one that has the largest end
            if(prevInterval[1] >  interval[1]){
                prevInterval = interval;
            }
        }
        //otherwise move on to compare the next two, by updating prevInterval to next one
        else{
        prevInterval = interval;
        }
    }


    return count
};


let intervals = [[1,2],[2,3],[3,4],[1,3]]

console.log(eraseOverlapIntervals(intervals));