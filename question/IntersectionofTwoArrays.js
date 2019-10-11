// Intersection of Two Arrays II

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // 陣列較長的為store, 較短為array
    var store, array;
    var number = [];
    if (nums1.length > nums2.length) {
        store = nums1;
        array = nums2;
    } else {
        store = nums2;
        array = nums1;
    }

    for (var i = 0; i < array.length; i++) {
        // 取短作為比較
        var intseract = array[i]
            // 判斷長陣列store是否有短陣列的值
        if (store.indexOf(intseract) >= 0) {
            // 長陣列中相同清空
            store[store.indexOf(intseract)] = null;
            // 推相同數字進number
            number.push(intseract);
        }
    }
    return number
};