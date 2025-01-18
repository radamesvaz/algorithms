class Node {
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

const node1 = new Node(15); // Create a new node with data 15

console.log(node1.toString()); // Output: Node Data: 15

class LinkedList{
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
}

// Example usage:

// Empty list
const listEmpty = new LinkedList()
const size = listEmpty.size()
const isEmpty = listEmpty.isEmpty()
console.log(size)
console.log(isEmpty)
console.log(listEmpty.search(2))

// List with nodes
const list = new LinkedList()
list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)
console.log(list.isEmpty())
console.log(list.size())
console.log(list.search(1))
