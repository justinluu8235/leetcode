/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    //edge case of one item. 
    if(head.next == null){
        return;
    }
      

    //create a reversed link list
    let node = head;
    let nextNode = null;
    let newNode;
    let length = 0;
    while(node != null){
        length ++;
        newNode = new ListNode(node.val);
        newNode.next = nextNode;
        nextNode = newNode;
        node = node.next;
    }

    console.log('reversed', newNode);
    console.log("Length", length);

    //loop through original linked list and insert stuff needed
    count = 1;
    while(head != null){
        //temporarily store the next node, 
        let temp = head.next;
        // add next node from the reversed list 
        //count +! 
        head.next = newNode;
        count ++;
        newNode = newNode.next;
        head = head.next;   
        console.log(head.val);
        if(count == length){
            head.next = null;
            break;
        }

        //reversed node .next is temp node 
        //count +1
        head.next = temp;
        count++;
        head = head.next;
        console.log(head.val);
        if(count == length){
            head.next = null;
            break;
        }
        

    }
    
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
let node1 = new ListNode(2);
let node2 = new ListNode(3);
let node3 = new ListNode(4);
head.next = node1;
node1.next = node2;
node2.next = node3;


reorderList(head);