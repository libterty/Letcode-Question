// Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var keep = []
    keep = nums.filter(function(element, index, arr) {
        return arr.indexOf(element) !== index
    })
    if (keep.length > 0) {
        return true
    }
    return false
};