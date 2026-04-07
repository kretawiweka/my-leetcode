// Last updated: 4/8/2026, 2:07:55 AM
function summaryRanges(nums: number[]): string[] {
   let arr = []
   let first = nums[0]
   let second = nums[0]

   if (nums.length === 1) return [first.toString()]

    for (let i = 1; i < nums.length; i++) {
        if (nums[i]-1 !== nums[i-1]) {
            if (first !== second) {
                arr.push(`${first}->${second}`)
                first = nums[i]
                second = nums[i]
            } else {
                arr.push(first.toString())
                first = nums[i]
                second = nums[i]
            }
        } else {
            second = nums[i]
        }


        if (i === nums.length-1) {
            if (first !== second) {
                arr.push(`${first}->${second}`)
            } else {
                arr.push(first.toString())
            }
        }
    }

    return arr
};