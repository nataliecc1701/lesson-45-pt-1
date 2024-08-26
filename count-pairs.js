// add whatever parameters you deem necessary
function countPairs(nums, target) {
    const numSet = new Set(nums);
    let count = 0;
    
    for (const num of nums) {
        if (target - num > num && numSet.has(target-num)) count++;
    }
    
    return count;
}

module.exports = countPairs;
