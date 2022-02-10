/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {

    let set = new Set();
    while(head != null){
        if(set.has(head)){
            return true;
        }
        set.add(head)

        head = head.next;
    }

    return false;
    
};

class ListNode {
    val;
    next;
    constructor(val){
        this.val = val;
        this.next - null;
    }
}

let head = new ListNode(3);
let node1 = new ListNode(2);
let node2 = new ListNode(0);
let node3 = new ListNode(-4);
head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node1;

console.log(hasCycle(head));