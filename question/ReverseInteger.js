/**
 * Reverse Integer
 * Input: -123 Output: -321
 * Input: 120 Output: 21
 */
var reverse = function(x) {
    // 32位元為上限
    var INT_MAX = Math.pow(2, 31) - 1
    if (0 <= x && x < 10) return x;

    var nFlag = '';
    // x to string
    var str = x.toString();

    // reverse number string
    var rStr = nFlag + str.split('').reverse().join('');

    // x<0, move '-' from rstr back to front
    if (rStr.indexOf('-') !== -1) {
        rStr = '-' + rStr.replace('-', '');
    }

    var result = parseInt(rStr);

    if (result > INT_MAX || result < -(1 + INT_MAX)) return 0;
    return result;
};