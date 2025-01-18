class node:
    # An object for storing a single node of a linked list
    # Models two attributes - data and the link to the next node in the list

    data = None
    next_node = None

    # Constructor to initialize the node object
    def __init__(self, data):
        self.data = data

    # Method for setting the link to the next node in the list
    def __repr__(self):
        return "<Node data: %s>" % self.data
    
class LinkedList:
    # Singly linked list
    def __init__(self):
        self.head = None

    # Check if the linked list is empty
    def is_empty(self):
        return self.head == None
    
    # Check the size of the list. Returns the number of nodes in the list
    # Takes O(n) time
    def size(self):
        current = self.head
        count = 0
        while current:
            count += 1
            current = current.next_node
        return count

    # Adds a new node containing data at the head of the list
    # Takes O(1) -constant time
    def add(self, data):
        new_node = node(data)
        new_node.next_node = self.head
        self.head = new_node

    # Search for the fist node containing data that matches the key
    # Returns the node or None if not found
    # Takes O(n) - Linear - time
    def search(self, key):
        current = self.head

        while current:
            if current.data == key:
                return current
            else:
                current = current.next_node
        return None

    def __repr__(self):
        # Return a string representation of the list
        # Takes O(n) time
        nodes = []
        current = self.head

        while current:
            if current is self.head:
                nodes.append("[Head: %s]" % current.data)
            elif current.next_node is None:
                nodes.append("[Tail: %s]" % current.data)
            else:
                nodes.append("[%s]" % current.data)

            current = current.next_node
        return '-> '.join(nodes)