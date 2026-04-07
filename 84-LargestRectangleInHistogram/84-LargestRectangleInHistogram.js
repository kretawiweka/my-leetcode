// Last updated: 4/8/2026, 2:08:42 AM
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let length = heights.length
  let maxArea = 0
  let stack = [] // [height, index]

  for (let i = 0; i < heights.length; i++) {
    let start = i
    while (stack.length && heights[i] < stack[stack.length - 1][0]) {
        let [heightPop, iPop] = stack.pop()
        let width = i - iPop
        let area = heightPop * width
        maxArea = Math.max(maxArea, area)

        start = iPop
    }
    stack.push([heights[i], start])
  }

  while(stack.length) {
    let[heightPop, iPop] = stack.pop()
    let width = length - iPop
    let area = heightPop * width
    maxArea = Math.max(maxArea, area)
  }

  return maxArea
};