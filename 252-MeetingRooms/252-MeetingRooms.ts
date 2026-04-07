// Last updated: 4/8/2026, 2:07:43 AM
function canAttendMeetings(intervals: number[][]): boolean {
    let sortedIntervals = intervals.sort((a, b) => a[0] - b[0])
    let i = 0
    while (i < intervals.length-1) {
        if (sortedIntervals[i][1] > sortedIntervals[i+1][0]) return false
        i++
    }
    return true
};