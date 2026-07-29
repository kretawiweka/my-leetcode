// Last updated: 7/30/2026, 5:48:40 AM
1/**
2 * @param {number[]} nums1
3 * @param {number[]} nums2
4 * @return {number[][]}
5 */
6var findDifference = function(nums1, nums2) {
7    let res1 = []
8    let res2 = []
9
10    for (let i = 0; i < nums1.length; i++) {
11        if (nums2.indexOf(nums1[i]) === -1) {
12            if (res1.indexOf(nums1[i]) === -1) {
13                res1.push(nums1[i])
14            }
15            
16        }
17    }
18
19    for (let i = 0; i < nums2.length; i++) {
20         if (nums1.indexOf(nums2[i]) === -1) {
21            if (res2.indexOf(nums2[i]) === -1) {
22                res2.push(nums2[i])
23            }
24        }
25    }
26
27    return [res1, res2]
28};