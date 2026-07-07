// Last updated: 7/8/2026, 12:53:52 AM
1/**
2 * @param {number[]} nums
3 * @return {number[][]}
4 */
5var permute = function(nums) {
6    let result = []
7
8    if (nums.length === 1) {
9        return [[...nums]]
10    }
11
12
13    for (let a = 0; a < nums.length; a++) {
14        let n = nums.shift()
15        let perms = permute(nums)
16
17        for (let perm of perms) {
18            perm.push(n)
19        }
20
21        result.push(...perms)
22        nums.push(n)
23    }
24
25    return result
26};
27
28