// Single Number

var singleNumber = function(nums) {
    // both should work
    let sin = 0;
    for (var i = 0; i < nums.length; i++) {
        sin = sin ^ nums[i]
        console.log(sin)
    }
    return sin;

    // sin 2, 1, 0, 2, 1

    let sin = nums[0];
    for (var i = 1; i < nums.length; i++) {
        sin = sin ^ nums[i]
        console.log(sin)
    }
    return sin;
    // sin 1, 0, 2, 1

    /**
     * 001 = nums[0] ^ nums[1]
     * 000 = 001 ^ nums[2]
     * 010 = 000 ^ nums[3]
     * 001 = 010 ^ nums[4]
     * 
     * 001 = 010 ^ 011
     * 000 = 001 ^ 001
     * 010 = 000 ^ 010
     * 001 = 010 ^ 011
     */
};