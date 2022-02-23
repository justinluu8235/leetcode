
let canFinish = (numCourses, prerequisites) => {

    //map each course to its prereqs
    let courseMap = new Map();
    for(let i=0; i<prerequisites.length; i ++){
        let course = prerequisites[i][0];

        if(courseMap.has(course)){
            let list = courseMap.get(course)
            
            list.push(prerequisites[i][1]);
            courseMap.set(course, list)
        }
        else{
            let newList = [];
            newList.push(prerequisites[i][1]);
            courseMap.set(course, newList)
        }
    }
    let visited = new Set();
        console.log(courseMap);
    for(let i=0; i<numCourses ;i++){
        if(!visitCourses(i,courseMap,visited)){
            return false;
        }
    }

    return true;

}

let visitCourses =  (course, courseMap, visited) => {
    if(!courseMap.has(course)){
        return true;
    }
    //track course being visited
    visited.add(course);
    console.log(visited);

    let prereqs = courseMap.get(course);

    for(let i=0; i<prereqs.length; i++){
        console.log(prereqs[i])
        if(visited.has(prereqs[i])){
            console.log('circuluar')
            return false;
        }
        
        let visitPrereq = visitCourses(prereqs[i], courseMap, visited)
        if(!visitPrereq){
           
            return false;
        }

    }

    visited.delete(course);
    courseMap.delete(course);

    return true;


}




let numCourses = 2;

let prerequisites = [[1,0], [0,1]];

let numCourses1 = 2;
let prerequisites1 = [[1,0], [2,0], [2,1]]

let numCourses2 = 2;
let prerequisites2 = [[0,1]]


// console.log(canFinish(numCourses, prerequisites));
console.log(canFinish(numCourses, prerequisites));


/*


 let preMap;
 let set;
 var canFinish = function(numCourses, prerequisites) {
     preMap = new Array(numCourses);
     for (let i=0; i< preMap.length; i++){
         preMap[i] = [];
     }
     
     for (let i=0; i<prerequisites.length; i++){
         let prereq = prerequisites[i];
         preMap[prereq[0]].push(prereq[1]);
     }
     
     set = new Set()
     for(let i=0; i<numCourses; i++){
         if(!dfs(i)){
             return false;
         }
     }
     
     return true;
     
     
 };
 
 let dfs = function(course){
     if(set.has(course)){
         return false;
     }
     if(preMap[course].length == 0){
         return true;
     }
     
     set.add(course);
     
     for(let i=0; i<preMap[course].length; i++){
         if(!dfs(preMap[course][i])){
             return false;
         }
     }
     
     set.delete(course);
     preMap[course] = [];
     
     return true;
     
 }
 
 
*/