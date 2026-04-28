// Last updated: 4/28/2026, 11:11:50 PM
1/**
2 * @param {number} n
3 * @return {number}
4 */
5var climbStairs = function(n) {
6    const memo = {}
7
8    const climb = (n) => {
9        if (n === 1) return 1
10        if (n === 2) return 2
11
12        if (memo[n] !== undefined) {
13            return memo[n]
14        }
15
16        memo[n] = climb(n-1) + climb(n-2)
17
18        return memo[n]
19    }
20
21    return climb(n)
22};