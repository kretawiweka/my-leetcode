// Last updated: 4/8/2026, 2:09:22 AM
function twoSum(nums: number[], target: number): number[] {
  for (let x = 0; x < nums.length; x++) {
    const diff = target - nums[x]
    const diffIndex = nums.indexOf(diff)
    if (diffIndex !== -1 && diffIndex !== x) {
      return [diffIndex, x].sort((a, b) => a-b)
    } 
  }
};