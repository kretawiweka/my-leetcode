// Last updated: 4/8/2026, 2:08:54 AM
function merge(intervals: number[][]): number[][] {
    let sortedIntervals = intervals.sort((a, b) => a[0] - b[0])
    let res: number[][] = [];

    let currentInterval = sortedIntervals[0];

    for (let i = 1; i < sortedIntervals.length; i++) {
        if (currentInterval[1] >= sortedIntervals[i][0]) {
            currentInterval[1] = Math.max(currentInterval[1], sortedIntervals[i][1]);
        } else {
            res.push(currentInterval);
            currentInterval = sortedIntervals[i];
        }
    }
    res.push(currentInterval);
    return res
};