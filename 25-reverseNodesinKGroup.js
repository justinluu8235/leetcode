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
 var reverseKGroup = function(head, k) { 

     let dummy = new ListNode(0, head);
     let nodeBeforeGroup = dummy;
     while(true){

        //get to the kth node
         let counter = k;
         let currentNode = nodeBeforeGroup;
         while(currentNode != null && counter > 0){
             currentNode = currentNode.next;
             counter --;
         }
         let kthNode = currentNode;

         //gone to far - not enough nodes to make a group; we're done
         if(kthNode == null){
            break;
         }
         let nodeAfterGroup = kthNode.next;

         //reverse group
         //start pointer to the next group to make sure its connect
         let prevNode = kthNode.next;
         let current = nodeBeforeGroup.next;
         while(current != nodeAfterGroup){
             temp = current.next;
             current.next = prevNode;
             prevNode = current;
             current = temp;
         }
         
         let temp1 = nodeBeforeGroup.next;
         nodeBeforeGroup.next = kthNode;
         nodeBeforeGroup = temp1;






     }
     return dummy.next;

};

class ListNode{
    val;
    next;
    constructor(val, next){
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }

}

let head = new ListNode(1);
let node1 = new ListNode(2);
let node2 = new ListNode(3);
let node3 = new ListNode(4);
let node4 = new ListNode(5);
head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

let k = 2;
console.log(head.val);
let newHead = reverseKGroup(head, k);

// while(newHead != null){
//     console.log(newHead);
//     newHead = newHead.next;
// }