import linkedList from "./factories/linkedlist.js";

const newLinkedList = linkedList();

newLinkedList.append("dog");
newLinkedList.append("cat");
newLinkedList.append("parrot");
newLinkedList.append("hamster");
newLinkedList.append("snake");
newLinkedList.append("turtle");

newLinkedList.toString();