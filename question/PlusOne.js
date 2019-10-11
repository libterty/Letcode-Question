// Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // 判斷相加後是否進位
    var carry = 0;

    for (var i = digits.length - 1; i >= 0; i--) {
        // 目前位數 = 目前位數 ＋ 前面是否進位
        digits[i] = digits[i] + carry;

        // 給最後一個數字加1
        if (i === digits.length - 1) {
            digits[i] = digits[i] + 1;
        }

        // 如果個位數為10代表需要進位
        if (digits[i] === 10) {
            digits[i] = 0
            carry = 1;
        } else {
            carry = 0;
        }
    }

    // 如果有進位
    if (carry === 1) {
        // 陣列開頭加1
        digits.unshift(carry);
    }

    return digits;
};