// Last updated: 7/5/2026, 11:34:13 PM
1/**
2 * @param {number[]} nums1
3 * @param {number[]} nums2
4 * @param {number[]} nums3
5 * @return {number[]}
6 */
7var twoOutOfThree = function(nums1, nums2, nums3) {
8    let result = []
9
10    for (let a = 0; a < nums1.length; a++) {
11        if (nums2.includes(nums1[a] || nums3.includes(nums1[a]))) {
12            if (!result.includes(nums1[a])) {
13                result.push(nums1[a])
14            }
15        }
16    }
17
18    for (let a = 0; a < nums2.length; a++) {
19        if (nums1.includes(nums2[a]) || nums3.includes(nums2[a])) {  
20            console.log("includes", nums2[a])          
21            if (!result.includes(nums2[a])) {                
22                result.push(nums2[a])
23            }
24        }
25    }
26
27    for (let a = 0; a < nums3.length; a++) {
28        if (nums1.includes(nums3[a] || nums2.includes(nums3[a]))) {
29            if (!result.includes(nums3[a])) {
30                result.push(nums3[a])
31            }
32        }
33    }
34    
35    return result
36};