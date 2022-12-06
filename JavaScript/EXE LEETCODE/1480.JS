function leet(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i-1];
    }
    return nums;
}
console.log(leet([1,2,3,4]));