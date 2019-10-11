/**
 * @param {number[]} nums
 * @return {number}
 */

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    // expect return [0, 1, 2, 3, 4]

var removeDuplicates = function(nums) {
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                nums.splice(j, 1);
                j--;
            }
        }
    }
}