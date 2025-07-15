import nodes from "./nodes.js";



export default function linkedList() {
    let head = null;

    /*
    note: remember to 
    */

    // adds new node to the end of the linked list
    function append(value) {
        // if the linkedlist is empty, add the node as the head
        if(head === null) {
            head = nodes(value, null);
            return;
        }
        
        // start at head of the linked list
        let curr = head; 

        // traverse the linked list until it reaches the end, and stop on the last node
        while(curr.nextNode !== null) {
            // if the next node after the current one is null, then we know its the end of the list
            curr = curr.nextNode;
        }

        // add given node to the end of the list by making the previous last node point to the new last node
        curr.nextNode = nodes(value, null);
    }
    
    // function prepend() {

    // }

    // function size() {

    // }

    // function head() {

    // }

    // function tail() {

    // }

    // function at(inputIndex) {

    // }

    // function pop() {

    // }

    // function contains(inputValue) {

    // }

    // function find(inputValue) {

    // }

    function toString() {
        if(head === null) {
            console.log("No items in linked list found.");
            return;
        }

        let curr = head;

        while(curr !== null) {
            // console.log(curr);
            console.log(`( ${curr.value} ) ->`);
            curr = curr.nextNode;
        }

        if(curr === null) {
            console.log("null");
        }
    }

    return {append, toString};
}