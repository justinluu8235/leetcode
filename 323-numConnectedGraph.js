let adjMap;
let visitSet;
let countComponents = (n, edges) => {

    if(n < 2 ){
        return n;
    }
    //build an adjacency list map
    adjMap = new Map();
    for(let i=0; i<n; i++){
        let set = new Set();
        adjMap.set(i, set);
    }
    //populate adjacency list
    for(let i=0; i<edges.length; i++){
        let num1 = edges[i][0];
        let num2 = edges[i][1];
        let set1 = adjMap.get(num1);
        let set2 = adjMap.get(num2);
        set1.add(num2);
        set2.add(num1);
        adjMap.set(num1, set1);
        adjMap.set(num2, set2);
    }

    console.log("adjacency map", adjMap);

    //loop through the keys of the map
    visitSet = new Set();
    let counter = 0;
    for(let key of adjMap.keys()){
        if(dfs(key)){
            counter ++;
        }
    }
    return counter;
  
};

let dfs = (num, prev) => {
    
    //if this number has been visited, return false;
    if(visitSet.has(num)){
        return false;
    }
    //otherwise add to the set
    visitSet.add(num);

    // loop through its adjacency list
    let set = adjMap.get(num);
    for(let adj of set){
        // if adjacency list num is previous number, skip it to avoid circular logic. 
        if(adj == prev){
            continue;
        }
        dfs(adj, num);
    }
    return true;
}


let edges = [[0,1],[1,2],[3,4]];
let n=5;

let edges1 = [[0,1],[1,2],[2,3],[3,4]];
let n1 = 5;

console.log(countComponents(n, edges));
console.log(countComponents(n1, edges1));
