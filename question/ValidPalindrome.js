// Valid Palindrome

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();

    //     fail at '0P'
    //     charactersArr = s.split('').filter(character => {
    //         // 只回傳為a-z字母
    //         return /[^a-z]/.test(character)
    //     })

    //     return charactersArr.join('') === charactersArr.reverse().join('')
    s = s.replace(/[^a-z0-9]/ig, '');

    var rev = s.split('').reverse().join('');

    return s.indexOf(rev) === 0;
};