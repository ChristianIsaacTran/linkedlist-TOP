# This is the linked list project in the advanced javascript section of the full stack path
we are tasked with the goal of making a functioning linked list data structure that 
has the outlined function operations within the function factories/classes. This is to ensure that 
we get a good fundation on the concept of a data structure, how to build one, and how to 
fundamentally understand them. Once we do that, it should make learning other data structures
easier with practice.

https://www.theodinproject.com/lessons/javascript-linked-lists


<!-- I re-read the linked list factory functions and it does involve creating nodes with the passed value. -->

# What is a linked list?
To my understanding, a linked list is a linear sequential list similar to how 
arrays work, but with "nodes" that contain 2 main items: the data (or whatever 
the node contains) and the "pointer" that points to the next node's reference so that 
we know which node goes in which order. Because of this quirk, we can make modifications 
to the linked lists by adding, deleting, or other operations without it having to 
reindex the entire thing like an array. The drawback is that unlike an array, 
linked lists cannot be immediately indexed, you would have to go through the entire 
linked list starting sequentially at the "head" (head is just the term for the start of the 
linked list. Tail represents the end of the linked list respectively) and keep going through the 
list until we either reach the data/node/item you're looking for, or if the next pointer hits NULL,
it means it's reached the end of the list. 

node 1 (head)                               node 2                                      node 3  (tail)
[data, pointer to next node -> node 2]  ->  [data, pointer to next node -> node 3]  ->  [data, pointer to next node -> NULL (end of the linked list)]

The linked list data structure allows for unique storage modification and opertaions like inserting, removing, etc. It also supports
doubly-linked-lists, where in addition to the next node pointer reference in the node, there is also a reference to the previous node
in the case you would want to traverse the list backwards if needed. 

node 1 (head)                                                                    node 2 (tail)
[pointer to previous node -> NULL, data, pointer to next node -> node 2] ->   <- [pointer to previous node -> node 1, data, pointer to next node -> NULL]
