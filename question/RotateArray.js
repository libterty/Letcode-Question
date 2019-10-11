// Rotate Array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let step = k % nums.length
    for (let i = 0; i < step; i++) {
        let val = nums.pop();
        nums.unshift(val);
    }
};