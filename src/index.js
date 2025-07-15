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
