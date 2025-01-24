/**
 * 
 * @param {*} array 
 * @param {*} target 
 * @param {*} start define the start of the array to get the half while mantaining the original's index
 * @param {*} end define the end of the array to get the half while mantaining the original's index
 * @returns 
 */ 
const binarySearch = (array, target, start = 0, end = array.length - 1 ) =>{
    if (start > end){
        return -1
    }

    const mid = Math.floor((start + end) / 2)

    if(array[mid] === target){
        return mid
    }

    if(array[mid] < target){
        return binarySearch(array, target, mid + 1, end)
    }
    return binarySearch(array, target, start, mid - 1)
}

const testArray = [1,2,3,4,5,6,7,8,9]
console.log(binarySearch(testArray, 4))
console.log(binarySearch(testArray, 1))