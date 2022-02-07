
let adjMap;
let visitSet;
let validTree = (n, edges) => {
    //if n is 0, then its a valid tree
    if(n==0){
        return true;
    }

    //Build adjacency list
    adjMap = new Map();
    for(let i=0; i<n; i++){
        let set = new Set();
        adjMap.set(i, set);
    }

    for(let i=0; i<edges.length; i++){
        let num1 = edges[i][0];
        let num2 = edges[i][1];
        let set1 = adjMap.get(num1);
        let set2 = adjMap.get(num2);
        set1.add(num2);
        set2.add(num1);
        adjMap.set(num1, set1);
        adjMap.set(num2.set2);
    }
    console.log(adjMap)
    visitSet = new Set();
    //run dfs on the first node (0) , and then also check if we went through all of the  nodes
    return dfs(0, -1) && visitSet.size == n;
}

let dfs = (num, prev) =>{
    console.log(num)
    //main thing is to check for circular logic
    //check visit set to see if we already hit thsi, return false
    if(visitSet.has(num)){
        console.log('visited already')
        return false;
    }
    // add to visit set
    visitSet.add(num);
    // recursive call on adjacent ones. skip the node it came from. 
    let set = adjMap.get(num);
    for(let adj of set){
        console.log('adj', adj)
        if(adj == prev){
            continue;
        }
        else{
            if(!dfs(adj, num)){
                return false;
            }
        }
    }

    return true;
}

let n = 5;

let edges = [[0,1],[0,2],[0,3],[1,4]];

console.log(validTree(n, edges))