// Last updated: 4/8/2026, 2:08:50 AM
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let sortedIntervals = intervals.sort((a, b) => a[0] - b[0])
    let result = []

    let currentIntervals = sortedIntervals[0]


    for (let i = 1; i < sortedIntervals.length; i++) {
        if (currentIntervals[1] >= sortedIntervals[i][0]) {
            currentIntervals[1] = Math.max(currentIntervals[1], sortedIntervals[i][1])
        } else {
            result.push(currentIntervals);
            currentIntervals = sortedIntervals[i];
        }
    }
    result.push(currentIntervals);
    return result
};