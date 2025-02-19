import { LinkedList } from "../../data-structures/linked_list.js";

const mergeSortLinkedList = (list) =>{
    if(list.size() <= 1){
        return list
    }

    const [leftHalf, rightHalf] = splitList(list)
    const leftHalfSorted = mergeSortLinkedList(leftHalf)
    const rightHalfSorted = mergeSortLinkedList(rightHalf)

    return mergeLinkedList(leftHalfSorted, rightHalfSorted)
}

// Divide the unsorted list at midpoint into sublists
const splitList = (list) =>{
    if(list === null || list.head === null){
        const leftHalf = list
        const rightHalf = null

        return [leftHalf, rightHalf]
    }

    let size = list.size()
    let midpoint = Math.floor(size / 2)
    let midpointNode = list.nodeAtIndex(midpoint - 1)

    let leftHalf = list
    let rightHalf = new LinkedList()
    rightHalf.head = midpointNode.nextNode
    midpointNode.nextNode = null

    return [leftHalf, rightHalf]

}

/**
 * Merges two linked lists sorting by data in the nodes.
 * Returns a new merged list
 * @param {*} leftHalf 
 * @param {*} rightHalf 
 */
const mergeLinkedList = (leftHalf, rightHalf) =>{
    // Create a new linked list that contains nodes from
    // merging leftHalf and rightHalf
    let merged = new LinkedList()

    // Add a fake head that is descarted later
    merged.add(0)
    
    // Set current to the head of the list
    let current = merged.head

    // Obtain head nodes for left and right linked lists
    let leftHead = leftHalf.head
    let rightHead = rightHalf.head
    
    // Iterate over left & right until we reach the tail node of either
    while(leftHead !== null || rightHead !== null){
        // If the left head is null, add the nodes on the right to the current list
        if(leftHead === null){

            current.nextNode = rightHead
            // since it will be a single linked list, only one value, by making the right head point to the next node
            // that is null, we will exit the loop
            break
        } else if(rightHead === null){

            current.nextNode = leftHead
            // since it will be a single linked list, only one value, by making the left head point to the next node
            // that is null, we will exit the loop
            break
        }

        // Compare the values, add the node with the lesser value to the current.nextNode
        // and point to the next node of the comparison
        if (leftHead.data < rightHead.data) {
            current.nextNode = leftHead;
            leftHead = leftHead.nextNode;
        } else {
            current.nextNode = rightHead;
            rightHead = rightHead.nextNode;
        }

        current = current.nextNode;

    }

    // Remove the fake head previously created
    merged.head = merged.head.nextNode

    return merged

}

let list = new LinkedList()
list.add(7)
list.add(10)
list.add(28)
list.add(15)
list.add(4)


console.log(list.getList())
const sortedList = mergeSortLinkedList(list)
console.log(sortedList)