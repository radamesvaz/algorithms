import { LinkedList } from "../../data-structures/linked_list.js";

const mergeSortLinkedList = (list) =>{
    if(list.size() <= 1){
        return list
    }

    const [leftHalf, rightHalf] = splitList(list)
    const leftHalfSorted = mergeSort(leftHalf)
    const rightHalfSorted = megeSort(rightHalf)

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

}