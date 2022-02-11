/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let result = new ListNode();
    let resultHead = result;
    //loop through the linked list 
    while(list1 != null || list2 != null){
        if(list1 == null){
            result.next = new ListNode(list2.val);
            list2 = list2.next;
            result = result.next;
            continue;
        }

        if(list2 == null){
            result.next = new ListNode(list1.val);
            list1 = list1.next;
            result = result.next;
            continue;
        }

        //both are not null at this point 

        //add the smaller first 
        if(list1.val < list2.val){
            result.next = new ListNode(list1.val);
            list1 = list1.next;
        }
        else{
            result.next = new ListNode(list2.val);
            list2 = list2.next;
        }



        result = result.next;
    }
    return resultHead.next;
    
};

class ListNode {
    val;
    next;
    constructor(val, next){
         this.val = (val===undefined ? 0 : val);
      this.next = (next===undefined ? null : next);
    }
}

let head1 = new ListNode(1, null);
let node1 = new ListNode(2, null);
let node2 = new ListNode(4, null);
head1.next = node1;
node1.next = node2;



let head2 = new ListNode(1, null);
let node3 = new ListNode(3, null);
let node4 = new ListNode(4, null);
head2.next = node3;
node3.next = node4;

mergeTwoLists(head1, head2);