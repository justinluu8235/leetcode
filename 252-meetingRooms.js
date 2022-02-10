/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
 let canAttendMeetings = (intervals) => {
     //assume interval[1] is always after interval[0]
     //assume cant end and start meeting on same minute
        if(intervals.length == 0){
            return true;
        }



        intervals.sort(function sortByIndex0(a,b){
            return a[0] - b[0];
        })

        for(let i = 1; i<intervals.length; i ++){
            if ( intervals[i][0] < intervals[i-1][1]){
                return false;
            }
        }
        
        console.log(intervals);
    return true;
};

let intervals = [[0,30],[5,10],[15,20]];
let intervals1 = [[7,10],[2,4]]
let intervals2 = [[16,22],[28,45],[3,9],[46,50],[13,14]];
console.log(canAttendMeetings(intervals));
console.log(canAttendMeetings(intervals1));
console.log(canAttendMeetings(intervals2));