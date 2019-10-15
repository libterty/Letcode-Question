var merge = function(nums1, m, nums2, n) {
    nums1.map(num => {
        if (num !== 0) {
            nums2.push(num)
        }
    })
    nums1 = nums2.sort()
};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
    // [1,2,2,3,5,6]