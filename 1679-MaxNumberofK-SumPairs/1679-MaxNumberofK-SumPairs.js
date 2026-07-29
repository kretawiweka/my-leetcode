// Last updated: 7/29/2026, 9:06:00 AM
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number}
5 */
6var maxOperations = function(nums, k) {
7    // const sortedNums = mergeSort(nums)
8    const sortedNums = nums.sort((a, b) => a - b)
9
10    let left = 0
11    let right = sortedNums.length - 1
12    let count = 0
13
14    while (left < right) {
15        let sum = sortedNums[left] + sortedNums[right]
16
17        if (k > sum) {
18            left++
19        } else if (sum > k) {
20            right--
21        } else {
22            left++
23            right--
24            count++
25        }
26    }
27    
28    return count
29};
30
31const mergeSort = (arr) => {
32
33}