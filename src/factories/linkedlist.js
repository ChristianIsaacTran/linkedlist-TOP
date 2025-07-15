/* eslint-disable no-magic-numbers */
import nodes from "./nodes.js";

export default function linkedList() {
    let head = null;

    /*
    note: remember to code for edge cases:
    1. when list is empty
    2. when list has only 1 node in it
    3. when list has 2 or more nodes in it
    */

    // adds new node to the end of the linked list
    function append(value) {
        // if the linkedlist is empty, add the node as the head (edge case 1)
        if (head === null) {
            head = nodes(value, null);
            return;
        }

        // (edge cases 2 and 3)
        // start at head of the linked list
        let curr = head;

        // traverse the linked list until it reaches the end, and stop on the last node
        while (curr.nextNode !== null) {
            // if the next node after the current one is null, then we know its the end of the list
            curr = curr.nextNode;
        }

        // add given node to the end of the list by making the previous last node point to the new last node
        curr.nextNode = nodes(value, null);
    }

    // adds a new node to the start of the linked list
    function prepend(value) {
        // if linkedlist is empty, add node as the head (edge case 1)
        if (head === null) {
            head = nodes(value, null);
            return;
        }

        // (edge cases 2 and 3)
        /* make two temporary variables, one for the head and one for the new node to insert, then assign the new node to point to the head node, 
        then make the new node the head. */
        const curr = head;
        const temp = nodes(value, curr);
        head = temp;
    }

    // return total number of nodes in the linked list
    function size() {
        // if linkedlist is empty (edge case 1), then return 0 nodes.
        if (head === null) {
            return 0;
        }

        // (edge cases 2 and 3)
        // iterate through linked list starting at head node. Increase counter for every non-null node found.
        let nodeCount = 0;
        let curr = head;
        while (curr !== null) {
            nodeCount += 1;
            curr = curr.nextNode;
        }

        return nodeCount;
    }

    // returns the first node in the linked list
    function getHead() {
        // if linkedlist is empty (edge case 1), then return an error message
        if(head === null) {
            return console.log("Head = null, linked list is empty");
        }

        // (edge case 2 and 3)
        // otherwise, just return the head variable since that contains the first node (start of the list)
        return head;
    }

    // returns the last node in the linked list
    function getTail() {
        // if linkedlist is empty is empty (edge case 1), then return an error message
        if(head === null) {
            return console.log("Head = null, linked list is empty");
        }

        // iterate to the last node and return the last node object.
        let curr = head;
        // if the current node's (curr) next node is null, we know its the last node
        while(curr.nextNode !== null) {
            curr = curr.nextNode;
        }

        return curr;
    }

    // returns the node at the given index (parameter)
    function at(inputIndex) {
        // assuming the linked list starts at 0 index
        // if linkedlist is empty (edge case 1), return an error message
        if(head === null) {
            return console.log("Head = null, linked list is empty");
        }

        // check if the index given exceeds 0 or size() - 1 (out of bounds)
        if(inputIndex < 0 || inputIndex > (size() - 1)) {
            return console.log("Input Index given is out of range of linked list");
        }

        // (edge cases 2 and 3)
        // iterate through linked list until it reaches inputIndex. 
        let curr = head;
        for(let i = 0; i < inputIndex; i += 1) {
            curr = curr.nextNode;
        }   

        // return node found at stopped index
        return curr;
    }

    // removes the last element from the linked list
    function pop() {
        // if the list is empty (edge case 1), return error message
        if(head === null) {
            return console.log("Head = null, linked list is empty");
        }

        let curr = head;
        
        // if there is only one node in the linked list (edge case 2), pop the first node and assign null to head, making linked list empty.
        if(curr.nextNode === null) {
            head = null;
            return;
        }

        // if there is 2 or more nodes in the linked list (edge case 3), iterate until last node, then remove the last node from the 2nd to last node's nextNode pointer
        while(curr.nextNode.nextNode !== null) {
            curr = curr.nextNode;
        }

        // make 2nd to last node the new "last node" and assign next node to null
        curr.nextNode = null;
    }

    // returns a boolean value depending on if the inputValue is in the list or not
    function contains(inputValue) {
        // if the linkedlist is empty (edge case 1), then return an error message/false
        if(head === null) {
            console.log("Head = null, linked list is empty. Returning False, value not found.");
            return false;
        }

        // (edge case 2 and 3) 
        // iterate through the linkedlist from the head and check if the current node's value matches the input value, or until we reach the end of the linkedlist
        let curr = head; 
        while(curr !== null) {
            if(curr.value === inputValue) {
                return true;
            }
            curr = curr.nextNode;
        }


        // return false if we went through the entire linked list and have not found a matching value
        return false;
    }

    // function find(inputValue) {

    // }

    function toString() {
        if (head === null) {
            console.log("No items in linked list found.");
            return;
        }

        let curr = head;

        while (curr !== null) {
            console.log(`( ${curr.value} ) ->`);
            curr = curr.nextNode;
        }

        if (curr === null) {
            console.log("null");
        }
    }

    return { append, toString, size, prepend, getHead, getTail, at, pop, contains};
}
