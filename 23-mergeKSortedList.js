let mergeKLists = function(lists) {
    let arr = [];

    //take all the node values and add them to an array;
    for(let i=0; i<lists.length; i++){
        let list = lists[i];
        while(list != undefined){
            arr.push(list.val);
            list = list.next;
        }
    }

    
    //sort the array
    arr.sort((a,b) => {
        return a-b;
    });

    let root = new ListNode(0);
    let result = root;
    //make a linked list
    for(let i=0; i<arr.length; i++){
        console.log(root);
        root.next = new ListNode(arr[i]);
        root = root.next;
    
    }
    return result.next;



}

class ListNode {
    val;
    next;
    constructor(val, next){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }

}

let root1 = new ListNode(1);
let node1 = new ListNode(4);
let node2 = new ListNode(5);
root1.next = node1;
node1.next = node2;

let root2 = new ListNode(1);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
root2.next = node3;
node3.next = node4;

let root3 = new ListNode(2);
let node5 = new ListNode(6);
root3.next = node5;

let list = [root1, root2, root3];

console.log(mergeKLists(list));
