function solution(nums) {
    let numSet = new Set();
    for(let i = 0; i < nums.length; ++i){
        numSet.add(nums[i]);
    }
    
    return (numSet.size < (nums.length / 2) ? numSet.size : nums.length / 2);
}