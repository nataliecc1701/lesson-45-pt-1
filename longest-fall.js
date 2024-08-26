// add whatever parameters you deem necessary
function longestFall(nums) {
    if (nums.length === 0) return 0;
    
    // keep track of our falls
    let longest = 1;
    let current = 1;
    
    for (let i=1; i < nums.length; i++) {
        if (nums[i] < nums[i-1]) {
            current++;
            if (current > longest) longest = current;
        }
        else current = 1;
    }
    
    return longest;
}

module.exports = longestFall;
