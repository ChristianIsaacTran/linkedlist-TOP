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

        // iterate through linked list starting at head node. Increase counter for every non-null node found.
        let nodeCount = 0;
        let curr = head;
        while (curr !== null) {
            nodeCount += 1;
            curr = curr.nextNode;
        }

        return nodeCount;
    }

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

    return { append, toString, size, prepend };
}
