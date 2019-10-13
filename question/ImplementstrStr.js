// Implement strStr()

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// 這就是字串搜尋的功能，用api的話，只要用String的indexOf(x)就可以直接得到答案
// 再來是用截字串的方法，haystack(i,needle.length)如果跟needle相等，回傳i的位置即可
// 如果不用api的情況下，使用迴圈比對haystack跟needle
// haystack = "abcbb"，needle = "bb" 為例
// 一開始 abcbb != bb 失敗 ； 往下比對abcbb != bb可是接下來 abcbb != bb 失敗
// 值到最後abcbb == bb比對成功，回傳haystack現在的位置3
// 以上寫法效率太差，實際上可以用KMP演算法來增加速度，不過KMP演算法我覺得超出easy的部分，這邊就先跳過不提

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) return 0;
    if (!haystack || needle.length > haystack.length) return -1;

    var i, j;

    for (i = 0; i < haystack.length; i++) {
        var str = haystack.substr(i, needle.length);
        if (str === needle) {
            return i;
        }
    }
    return -1;
};