const binarySearch = (array, target, start = 0, end = array.length -1 ) => {
    // The target does not exist in the array
    if(start > end){
        return -1
    }

    const mid = Math.floor((start + end) / 2)

    if (array[mid] === target){
        return mid
    }

    if (array[mid] < target){
        return binarySearch(array, target, mid + 1, end)
    } else {
        return binarySearch(array, target, start, mid - 1)
    }
}

const testArray = [1,2,3,4,5,6,7,8,9]
console.log(binarySearch(testArray, 4))
console.log(binarySearch(testArray, 1))