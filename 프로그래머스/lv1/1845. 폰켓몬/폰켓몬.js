function solution(nums) {
    let numSet = new Set(nums); 
    return (numSet.size < (nums.length / 2) ? numSet.size : nums.length / 2);}