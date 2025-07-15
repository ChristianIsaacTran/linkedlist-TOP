// import "./style.css";

import linkedList from "./factories/linkedlist.js";


// initialize a linkedlist object
const linkedListFactory = linkedList(); 

linkedListFactory.append("new node 1");
linkedListFactory.append("new node 2");
linkedListFactory.append("new node 3");
linkedListFactory.toString();