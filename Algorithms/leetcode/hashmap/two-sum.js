/**
 * Given an array of numbers, find the sum of 2 that equals the target.
 * URL: https://leetcode.com/problems/two-sum/solutions/5679696/easiest-detailed-explanation-with-image-and-commented-code/
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
const twoSum = (nums, target) => {

    // Create an object to store numbers and their corresponding indices
    let numToIndexMap = {}

    // Loop through the array
    for(i = 0; i <= nums.length; i++){
        // Calculate the difference between the target and the current number
        let difference = target - nums[i]

        // Check if the difference exists in the map
        if(numToIndexMap.hasOwnPropery(difference)){
            return [i, numToIndexMap[difference]]
        }

        numToIndexMap[nums[i]] = i;
    }

    return null

}