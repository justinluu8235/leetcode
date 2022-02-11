
class TrieNode{
    links;
    isEnd;

    constructor(){
        this.links = {};
        this.isEnd = false;
    }

    //containsKey - check links for next letter
    containsKey(char){
        return this.links[char] != null;
    }

    //getNode - get the node for a letter
    getNode(char){
        return this.links[char];
    }
    //put - set node for a letter
    put(char, trieNode){
        this.links[char] = trieNode;
        return;
    }

    //isEnd - check if end is true
    isEnd(){
        return this.isEnd;
    }

    ///setEnd - set end to true
    setEnd(){
        this.isEnd = true;
    }

}

let testNode = new TrieNode();
let node2 = new TrieNode();

console.log(testNode);
console.log(testNode.containsKey('a'));



class Trie {
    root;
    constructor() {
        this.root = new TrieNode();

    }
    insert = function(word) {
        let node = this.root;
  
        for(let i=0; i<word.length; i++){
            let letter = word[i];
            if(node.containsKey(letter)){
                node = node.getNode;
            }
            else{
                node.put(letter, new TrieNode());
                node = node.getNode();
            }
    
        }
        node.setEnd();
    };

    search = function(word) {
        let node = this.root;
        for(let i=0; i<word.length; i++){
            let letter = word[i];
            if(node.containsKey(letter)){
                node = node.getNode;
            }
            else{
                return false;
            }
    
        }
        return isEnd();
    };

    startsWith = function(prefix) {
        let node = this.root;
        for(let i=0; i<word.length; i++){
            let letter = word[i];
            if(node.containsKey(letter)){
                node = node.getNode;
            }
            else{
                return false;
            }
    
        }
        return true;
    };
}


