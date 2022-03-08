/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {

    //edge case 
    if(head == null){
        return null;
    }

    let linkedListLength = 0;
    let node = head;
    while( node != null){
        node = node.next;
        linkedListLength ++;
    }

    let numRotations = k % linkedListLength;
    // 3  %  5   = 3

    if(numRotations == 0){
        return head;
    }

    
    
    //get to the right head;
    //linkedListlength + 1 - numRotations
    //  5 + 1 = 6 - 3 = 3

    let newHeadIndex = linkedListLength + 1 - numRotations;

    let newHead;
    let count = 0;
    let temp = head;
    while(temp != null){
        count++;
        if(count == newHeadIndex){
            newHead = temp;
            break;
        }
        temp = temp.next;

    }

    console.log(newHead)


    
    //get second half 
    let secondHalfHead = head;
    let node1 = head;
    let count1 = 0;
    while(node1 != null){
        count1++;
        
        if(count1 == newHeadIndex - 1){
            break;
        }

        node1 = node1.next;
    }
    node1.next = null;


 



    let node2 = newHead;
    while(node2.next != null){
        node2= node2.next;
    }
    console.log(node2);
    node2.next = secondHalfHead;

    console.log('new head', newHead);

    return newHead;
};



// let head = [1,2,3,4,5];
let k = 3;







class ListNode{
    val;   /// integer
    next;   // ListNode

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

// console.log(head)
// console.log(head.next.next);    // 

// let node = head;
// //traverse a linked list
// while(node != null){
//     console.log(node.val);    // 5
//     node = node.next;     //head is now null
// }

// //head = null;
// console.log(head);
// console.log(node);

console.log(rotateRight(head, k));

