// Last updated: 7/27/2026, 11:37:54 PM
1/**
2 * @param {string} s
3 * @param {string} t
4 * @return {boolean}
5 */
6var isSubsequence = function(s, t) {
7    let leftBound = s.length
8    let rightBound = t.length
9
10    let pLeft = 0
11    let pRight = 0
12
13    while (pLeft < leftBound && pRight < rightBound) {
14        if (s[pLeft] === t[pRight]) {
15            pLeft++
16        }
17        pRight++
18    }
19
20    return pLeft === leftBound
21};