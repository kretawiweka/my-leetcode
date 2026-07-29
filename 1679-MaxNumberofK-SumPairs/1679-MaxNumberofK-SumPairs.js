// Last updated: 7/29/2026, 11:29:12 AM
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number}
5 */
6var maxOperations = function(nums, k) {
7    const sortedNums = mergeSort(nums)
8    console.log(sortedNums)
9    // const sortedNums = nums.sort((a, b) => a - b)
10
11    let left = 0
12    let right = sortedNums.length - 1
13    let count = 0
14
15    while (left < right) {
16        let sum = sortedNums[left] + sortedNums[right]
17
18        if (k > sum) {
19            left++
20        } else if (sum > k) {
21            right--
22        } else {
23            left++
24            right--
25            count++
26        }
27    }
28
29    return count
30};
31
32const mergeSort = (arr) => {
33    if (arr.length <= 1) {
34    return arr
35    }
36
37    const mid = Math.floor(arr.length / 2)
38    const left = arr.slice(0, mid)
39    const right = arr.slice(mid)
40
41    return merge(mergeSort(left), mergeSort(right))
42}
43
44const merge = (left, right) => {
45    let result = []
46    let l  = 0
47    let r = 0
48
49    while (l < left.length && r < right.length) {
50        if (left[l] <= right[r]) {
51            result.push(left[l])
52            l++
53        } else {
54            result.push(right[r])
55            r++
56        }
57    }
58
59    while (l < left.length) {
60        result.push(left[l])
61        l++
62    }
63
64    while (r < right.length) {
65        result.push(right[r])
66        r++
67    }
68
69    return result
70}