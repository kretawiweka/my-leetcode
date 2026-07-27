// Last updated: 7/28/2026, 12:16:07 AM
1/**
2 * @param {number[]} height
3 * @return {number}
4 */
5var maxArea = function(height) {
6    let left = 0
7    let right = height.length - 1
8    let max = 0
9
10    while (left < right) {
11        let curWidth = Math.min(height[left], height[right]) * (right - left)
12        if (curWidth > max) {
13            max = curWidth
14        }
15
16        if (height[left] > height[right]) {
17            right--
18        } else if (height[left] < height[right]) {
19            left++
20        } else {
21            left++
22            right--
23        }
24    }
25
26    return max
27    
28};