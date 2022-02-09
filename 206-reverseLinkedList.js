let reverseList = function(head) {
    let node = head;
    // let newNode = new ListNode(head.val, null);
    let prevNode = null;
    while(node != undefined){
        let newNode1 = new ListNode(node.val, prevNode)



        node = node.next;
        prevNode = newNode1;
    }
    return prevNode;
};

class ListNode{
    val;
    next;
    constructor(val, next){
        this.val = val===undefined ? 0 : val;
        this.next = (next===undefined ? null : next);
    }


}

let head = new ListNode(1, null);
let node1 = new ListNode(2, null);
head.next = node1;
let node2 = new ListNode(3, null);
node1.next = node2;
let node3 = new ListNode(4, null);
node2.next = node3;
let node4 = new ListNode(5, null);
node3.next = node4;

let newHead = reverseList(head);

console.log(newHead.next.val);