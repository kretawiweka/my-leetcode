// Last updated: 7/27/2026, 11:26:04 PM
1/**
2 * @param {number[]} nums
3 * @return {void} Do not return anything, modify nums in-place instead.
4 */
5var moveZeroes = function(nums) {
6    let writer = 0
7
8    for (let reader = 0; reader < nums.length; reader++) {
9        if (nums[reader] !== 0) {
10            nums[writer] = nums[reader]
11            writer++
12        }
13    }
14
15    while (writer < nums.length) {
16        nums[writer] = 0
17        writer++
18    }
19
20    return nums
21};