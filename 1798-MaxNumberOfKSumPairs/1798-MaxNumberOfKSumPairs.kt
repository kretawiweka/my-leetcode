// Last updated: 4/8/2026, 2:05:59 AM
class Solution {
    fun maxOperations(nums: IntArray, k: Int): Int {
        var count = 0
        var left = 0
        var right = nums.size - 1
        nums.sort()
        while (left < right) {
           if (nums[left] + nums[right] < k) {
                left++
           } else if (nums[left] + nums[right] > k) {
                right--
           } else {
                left++
                right--
                count++
           }
        }
        return count
    }
}