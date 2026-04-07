// Last updated: 4/8/2026, 2:09:13 AM
class Solution {
    fun maxArea(height: IntArray): Int {
        var maxArea = 0
        var left = 0
        var right = height.size - 1

        while (left < right) {
            var width = right - left

            maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * width)

            if (height[left] < height[right]) {
                left++
            } else {
                right--            
            }
        }    
        return maxArea
    }
}