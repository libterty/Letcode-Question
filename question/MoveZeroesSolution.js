/**
 *  Move Zeroes Solution
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var index = 0;
    for (var i = 0; i < nums.length; i++) {
        var n = nums[i]

        // 如果n不等於0,則由nums[0]開始遞增指派
        if (n !== 0) {
            nums[index++] = n
        }
    }

    // 從上放遞增的下個數開始
    for (index; index < nums.length; index++) {
        nums[index] = 0;
    }
};