let removeNthFromEnd = function(head, n) {
    let temp = new ListNode(0);
    let result = temp;
    temp.next = head;

    if(n == 0){
        return result.next;
    }

    //count how many nodes there are;
    let temp1 = head;
    let numNodes = 1;
    while(temp1.next != null){
        temp1 = temp1.next;
        numNodes ++;
    }
    

    //stop is before the node removed.
    let stop = numNodes - n;
    console.log('stop index', stop);
    let count = 0;
    while(temp != null){
        console.log(temp.val);
        console.log("count", count)
        if(count == stop){
            console.log("HE")
            temp.next = temp.next.next;
            break;
        }

        temp = temp.next;
        count++;
        
    }

    return result.next;


};


class ListNode{
    val;
    next;
    constructor(val, next){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

let head = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


console.log(removeNthFromEnd(head, 2));