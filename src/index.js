/* eslint-disable no-magic-numbers */
// import "./style.css";

import linkedList from "./factories/linkedlist.js";


// initialize a linkedlist object
const linkedListFactory = linkedList(); 

// append(value)
linkedListFactory.append("new node 1");
linkedListFactory.append("new node 2");
linkedListFactory.append("new node 3");

// toString()
linkedListFactory.toString();

// size()
console.log(linkedListFactory.size());

// prepend(value)
linkedListFactory.prepend("new node 4");
linkedListFactory.prepend("new node 5");

// toString()
linkedListFactory.toString();


// head()
console.log(linkedListFactory.getHead());

// tail()
console.log(linkedListFactory.getTail());

// at(index)
console.log(linkedListFactory.at(3));

// pop()
linkedListFactory.pop();

linkedListFactory.toString();

// contains(value)
console.log(linkedListFactory.contains("new node 4"));
console.log(linkedListFactory.contains("new node 7"));

// find(value)
console.log(linkedListFactory.find("new node 4"));
console.log(linkedListFactory.find("new node 2"));
console.log(linkedListFactory.find("new node 7"));


// extra credit functions: *******

// insertAt(value, index) 
console.log("Before insert: ");
linkedListFactory.toString();
linkedListFactory.insertAt("new node 8", 2);
console.log("After insert: ");
linkedListFactory.toString();

//removeAt(index)
linkedListFactory.removeAt(3);
linkedListFactory.toString();


