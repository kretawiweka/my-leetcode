// Last updated: 4/27/2026, 9:48:32 PM
1/**
2 * @param {number} x
3 * @return {boolean}
4 */
5var isPalindrome = function(x) {
6    if (x < 0) return false
7
8    let arr = x.toString().split('')
9    let left = 0
10    let right = arr.length - 1
11
12    while(left < right) {
13        if (arr[left] !== arr[right]) {
14            return false
15        }
16
17        left++
18        right--
19    }
20
21    return true
22};