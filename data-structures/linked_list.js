export class Node {
    // An object for storing a single node of a linked list
    // Models two pieces of data: the data stored in the node, and a reference to the next node in the list

    constructor(data){
        // The constructor takes one argument, the data to be stored in the node
        this.data = data; // Store the data in the node
        this.nextNode = null; // Initialize the reference to the next node as null

    }

    // Methods for interacting with the node can be added here
    toString(){
        return `Node Data: ${this.data}`;
    }
}


// Example usage:

// const node1 = new Node(15); // Create a new node with data 15

// console.log(node1.toString()); // Output: Node Data: 15

export class LinkedList{
    // Singly linked list
    constructor(data){
        this.head = null;
    }

    // Validates if the linked list is empty
    // @return {boolean}
    isEmpty(){
        return this.head === null;
    }

    // Validates the size of the linked list. Takes O(n)
    // @return {number} - Number of nodes in the list
    size(){
        let current = this.head;
        let count = 0;
        while (current !== null){
            count++;
            current = current.nextNode
        }
        return count
    }

    // Adds a new node containing data at the head of the list
    // Takes constant time O(1)
    add(data){
        let newNode = new Node(data);
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    // Search for the first node containing data that matches with the provided key
    // Takes O(n) linear time since must traverse the list
    // @param {*} key - The data to search for in the list
    // @return {Node} - The node containing the data or null if not found
    search(key){
        let current = this.head

        while (current !== null){
            if (current.data === key){
                return current
            }
            current = current.nextNode
        }
        return null
    }

    // Inserts a new node in a given position
    // Insertion takes O(1) constant time but finding the node at the insertion point takes O(n) linear time
    // Overall takes O(n) linear time
    insert(data, index){
        // If the index is 0, we know the new node will be at the this.head, so we can use the add method
        if (index === 0){
            return this.add(data);
        }

        // Creating the new node using the data provided
        let newNode = new Node(data)
        // Having the head be the current value before starting to iterate
        let current = this.head
        // Having the position be the index provided
        let position = index

        // While the position is greater than 1, we keep iterating through the list to find the position to insert the new node
        // We dont want to match the position with 0 to keep a reference to the previous node
        while (position > 1){
            current = current.nextNode
            position -= 1
        }

        // Once we find the position, we can insert the new node
        // We will call the current node (position - 1) as the previous node for our new node
        let previousNode = current
        // The next node for our new node will be the next node of the previous node
        let nextNode = current.nextNode

        // Now we can insert the new node
        // Add the reference of the previous next node to the new one
        previousNode.nextNode = newNode
        // Add the reference of the new node to the next node
        newNode.nextNode = nextNode

        return newNode
    }

    // Removes a node from the list and returns it
    // Takes O(n) linear time
    remove(key){
        // Keeping track of the current node, starting with the head
        let current = this.head;
        // Keeping track of the previous node, starting with null
        let previous = null;
        let found = false;

        // While there are nodes and we haven't found the node we are looking for, we keep iterating through the list
        while(current && !found){
            // If there's a match at the head of the linked list
            if(current.data === key && current === this.head){
                found = true;
                // We have the head to be the following node
                this.head = current.nextNode;
            } else if (current.data === key){
                // If we find the node we are looking for and is not the head of the linked list
                // We point the previous node to the current.nextNode, so we'll skip the current node entirely
                found = true;
                previous.nextNode = current.nextNode;
            } else {
                // If we didn't find the node, then the current node will be the previous node and we'll keep iterating
                previous = current;
                current = current.next_node
            }
        }
        return current;
    }

    nodeAtIndex(index){
        // Keep track of the current node, starting with the head
        let current = this.head;
        let position = index;

        while(position > 0){
            current = current.nextNode
            position -= 1;
        }

        return current

    }

    //
    removeAtIndex(index){
        // Keeping track of the current node, starting with the head
        let current = this.head;
        // Keeping track of the previous node, starting with null
        let position = index;

        if (position === 0){
            this.head = current.nextNode;
        }

        let previous = current;

        // While there are nodes and we haven't found the node we are looking for, we keep iterating through the list
        while(current && position >= 1){
            // Substract one position from the index we are looking for
            position -= 1;
            previous = current;
            current = current.nextNode
        }

        // If we found the node we are looking for, we point the previous node to the current.nextNode, so we'll skip the current node entirely
        previous.nextNode = current.nextNode;

        return current;
    }
}

// Example usage:
 
// Empty list
// const listEmpty = new LinkedList()
// const size = listEmpty.size()
// const isEmpty = listEmpty.isEmpty()
// console.log(size)
// console.log(isEmpty)
// console.log(listEmpty.search(2))

// // List with nodes
// const list = new LinkedList()
// list.add(1)
// list.add(2)
// list.add(3)
// list.add(4)
// list.add(5)
// console.log(list.insert(80, 0))
// console.log(list.isEmpty())
// console.log(list.search(80))
// // console.log(list.remove(80));
// console.log(list.removeAtIndex(1));

// // console.log(list.remove(2))
// console.log(list)
// console.log(list.size())