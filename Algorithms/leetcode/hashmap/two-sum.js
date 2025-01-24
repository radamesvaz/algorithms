/**
 * Given an array of numbers, find the sum of 2 that equals the target.
 * URL: https://leetcode.com/problems/two-sum/solutions/5679696/easiest-detailed-explanation-with-image-and-commented-code/
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
const twoSum = (nums, target) => {

    let numToIndexMap = {};

    for(let i = 0; i < nums.length; i++){
        let difference = target - nums[i]

        if(difference in numToIndexMap){
            return [numToIndexMap[difference], i]
        }
        numToIndexMap[nums[i]] = i
    }
    return []

}


const testArray = [2,7,11,15]
console.log(twoSum(testArray, 13))