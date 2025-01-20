/**
 * Sorts an array in an ascending order
 * Returns a new sorted list
 * 
 * Divide: Find the midpoint of the list and divide into sublists
 * Conquer: Recursivley sort the sublists created previously
 * Combine: Merge the sorted sublists created previously
 * 
 * @param {*} arr 
 * @returns 
 */
const mergeSort = (arr) =>{

    if(arr.length <= 1){
        return arr
    }

    const [leftHalf, rightHalf] = splitArray(arr)
    const leftHalfSorted = mergeSort(leftHalf)
    const rightHalfSorted = mergeSort(rightHalf)

    return mergeArr(leftHalfSorted, rightHalfSorted)
}

// Divide the unsorted list at midpoint into sublists
// @returns two sublists, left and right
const splitArray = (arr) =>{
    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return [left, right]
}

// Merges two arays sorting them in the process and retuns a new list
const mergeArr = (left, right) =>{
    let arr = []
    let i = 0
    let j = 0

    while (i < left.length && j < right.length){
        if (left[i] < right[j]){
            arr.push(left[i])
            i++
        } else {
            arr.push(right[j])
            j++
        }
    }

    while (i < left.length){
        arr.push(left[i])
        i++
    }

    while(j < right.length){
        arr.push(right[j])
        j++
    }

    return arr

}

/**
 * Verifies that the array passed is properly sorted
 * @param {array} arr 
 * @returns Bool
 */
const verifySorted = (arr) =>{
    const n = arr.length

    if (n === 0 || n === 1){
        return true
    }

    return arr[0] < arr[1] && verifySorted(arr.slice(1))
}

const simpleArr = [8,5,9,100,1];
const sortedArray = mergeSort(simpleArr)
console.log(sortedArray)
console.log(verifySorted(sortedArray))
