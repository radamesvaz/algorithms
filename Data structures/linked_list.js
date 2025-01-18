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

const node1 = new Node(15); // Create a new node with data 10

console.log(node1.toString()); // Output: Node Data: 10