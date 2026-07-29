// Last updated: 7/30/2026, 5:50:15 AM
1/**
2 * @param {number[]} nums1
3 * @param {number[]} nums2
4 * @return {number[][]}
5 */
6var findDifference = function(nums1, nums2) {
7    const set1 = new Set(nums1);
8    const set2 = new Set(nums2);
9
10    const onlyIn1 = [];
11    const onlyIn2 = [];
12
13    for (const num of set1) {
14        if (!set2.has(num)) {
15            onlyIn1.push(num);
16        }
17    }
18
19    for (const num of set2) {
20        if (!set1.has(num)) {
21            onlyIn2.push(num);
22        }
23    }
24
25    return [onlyIn1, onlyIn2];
26};