# Singly Linked List

***

## *Definition:*

    It is a list that contains nodes linked together, each node has a value and reference to the next node.

***

## *Challenge:*

    Implement a linked list by two classes; Node and Linked List.

***

## *Approach & Efficiency:*

    insert(value): This function has O(1) as big O notation of running time, because we didn't traverse through the linked list (didn' use loops).

    includes(value): Big O of running time for this function is O(n), because we used while loop in searching through the linked list. And the worst case is to find the target node at the last of linked list.

    toString(): Big O of running time for this function is O(n)because we used while loop in getting nodes in the linked list. We should get all nodes (n nodes).

    append(value): Big O of running time for this function is   O(n), beacause we used while loop to reach the last node of linked list.

    The Big O of space in all mentioned functions will be O(1), This is because there is no additional space being used than what is already given to us with the linked list input.

***

## *API*

    insert(value): Arguments: value, returns: nothing >> Adds a new node with that value to the head of the list with an O(1) time performance.

    includes(value): Arguments: value, returns: Boolean >> Indicates whether that value exists as a Node’s value somewhere within the list.

    toString(): Arguments: none, returns: a string representing all the values in the Linked List, formatted as:            "{ a } -> { b } -> { c } -> NULL".

    append(value): Arguments: value, returns: a node >> Add a new node at the tail of linked list.
