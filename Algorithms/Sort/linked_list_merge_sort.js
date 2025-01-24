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
    console.log("leftHead")
    console.log(leftHead)
    console.log(rightHead)
    
    // Iterate over left & right until we reach the tail node of either
    while(leftHead || rightHead){
        console.log("current", current)
        console.log("100")
        // If the left head is null, add the nodes on the right to the current list
        if(leftHead === null){
        console.log("200")

            current.nextNode = rightHead
            // since it will be a single linked list, only one value, by making the right head point to the next node
            // that is null, we will exit the loop
            rightHead = rightHead.nextNode
        } else if(rightHead === null){
            console.log("300")

            current.nextNode = leftHead
            // since it will be a single linked list, only one value, by making the left head point to the next node
            // that is null, we will exit the loop
            leftHead = leftHead.nextNode
        }

        // prepare the data for comparison
        let leftData = leftHead.data
        console.log(leftData)
        let rightData = rightHead.data

        // Compare the values, add the node with the lesser value to the current.nextNode
        // and point to the next node of the comparison
        if (leftData < rightData){
            current.nextNode = leftHead
            leftHead = leftHead.nextNode
        } else {
            current.nextNode = rightHead
            rightHead = rightHead.nextNode
        }
    }

    // Remove the fake head previously created
    head = merged.head.next_node
    merged.head = head

    return merged

}

let list = new LinkedList()
list.add(7)
list.add(10)
list.add(28)
list.add(15)
list.add(4)
list.add(3)
list.add(1)
list.add(10)

console.log(list.getList())
const sortedList = mergeSortLinkedList(list)
console.log(sortedList)