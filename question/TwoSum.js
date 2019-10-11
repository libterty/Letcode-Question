/**
 * Two Sum
 * nums = [2, 7, 11, 15], target = 9
 * expect return [0, 1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // time limited exceed
    // for (var i=0; i<nums.length; i++) {
    //     for (var j=i+1; j<nums.length; i++) {
    //         if(nums[i]+nums[j] === target) {
    //             return [i, j]
    //         }
    //     }
    // }
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var v = nums[i];

        if (map[target - v] >= 0) {
            // 如果 target - v可以在map中找到值x，代表之前已經出現過值x，target = x + v
            // 因此回傳 x的位置與目前v的位置  
            return [map[target - v], i]
        } else {
            // 使用map儲存目前的數字與其位置  
            map[v] = i;
        }
    }
};