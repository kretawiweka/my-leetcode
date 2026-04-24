// Last updated: 4/24/2026, 9:18:34 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var minOperations = function(nums) {
6    if (!nums.length) return 0
7
8    let secondary = [...nums]
9    let counter = 0;
10
11    for (let i = 1; i < secondary.length; i++) {
12        while (secondary[i] <= secondary[i-1]) {
13            secondary[i] = secondary[i] + 1
14            counter++
15        }
16    }
17
18    return counter
19};