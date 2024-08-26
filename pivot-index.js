// add whatever parameters you deem necessary
function pivotIndex(nums) {
    // first we sum the array
    let sum = 0;
    for (const num of nums) sum += num;
    
    let leftSum = 0;
    let i = 0;
    while (i < nums.length) {
        if (sum - nums[i] - leftSum === leftSum) return i;
        
        leftSum += nums[i]
        i++;
    }
    
    return -1;
}

module.exports = pivotIndex