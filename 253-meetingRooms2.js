/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var minMeetingRooms = function(intervals) {
    let startArr = new Array(intervals.length);
    let endArr = new Array (intervals.length);

    //create a sorted array for all the start times and end times
    for(let i =0; i< intervals.length; i++){
        let interval = intervals[i];
        startArr[i] = interval[0];
        endArr[i] = interval[1];

    }
    startArr.sort((a,b) => {
        return a - b;
    });
    endArr.sort((a,b) => {
        return a - b;
    });

    let start = 0;
    let end = 0;
    let roomCount = 0; 
    let max = 0;
    // loop through all the start and end intervals. 
    //really just need the start, cause after that's over, our count will just decrease as meetings end
    while(start < startArr.length){
        //if the start time is earlier than the end time, add one to the roomCount, and move start pointer
        if(startArr[start] < endArr[end]){
            roomCount ++ ;
            max = Math.max(max, roomCount);
            start++;
        }
        //if the start time is later or equal than the end time, remove one from roomCount, and move end pointer 
        else{
            roomCount --;
            end ++ ;
        }
    } 

    return max;
        
};

let intervals = [[0,30],[15,20],[5,10]];
let intervals1 = [[13,15],[1,13]]

//minimum conference rooms required  -> at any given time, the max number of overlaps.

// 0-> 30
// 5-> 10 
// 15->20

console.log(minMeetingRooms(intervals));