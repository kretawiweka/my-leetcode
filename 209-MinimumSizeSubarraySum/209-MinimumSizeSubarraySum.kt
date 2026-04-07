// Last updated: 4/8/2026, 2:08:09 AM
class Solution {
    fun minSubArrayLen(target: Int, nums: IntArray): Int {
        var n: Int = nums.size
        var ans: Int = Int.MAX_VALUE
        var left: Int = 0
        var sum: Int = 0
        for (i in 0 until n) {
            sum += nums[i]
            while (sum >= target) {
                ans = min(ans, i+1-left)
                sum -= nums[left++]
            }
        }
        if (ans != Int.MAX_VALUE) {
            return ans
        } 
        return 0
    }
}