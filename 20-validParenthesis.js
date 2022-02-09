
let isValid = function(s) {
    let map = new Map();
    map.set('(', ')');
    map.set('{', '}');
    map.set('[', ']');

    //create a stack
    let stack = [];
    //loop through the string
    for(let i=0; i<s.length; i++){
        let symbol = s[i];
        //if its an opener, add to stack
        if(map.has(symbol)){
            stack.push(symbol);
        }
        //it the stack is empty, and its a closer, then return false
        else if(stack.length == 0 && (symbol==')' || symbol==']' || symbol=='}')){
            return false;
        }
        else{
            //if its a closer, but doesnt match the top of stack, then return false
            if(map.get(stack[stack.length - 1]) != symbol ){
                return false;
            }
            //otherwise remove from end
            stack.pop();
        }
    }
    if(stack.length == 0){
        return true;
    }
    return false;
    
};


let s = "(]";

isValid(s);