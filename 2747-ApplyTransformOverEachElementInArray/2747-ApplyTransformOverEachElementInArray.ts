// Last updated: 4/8/2026, 2:05:24 AM
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let filtered = []
    for (let x = 0; x < arr.length; x++) {
        filtered = [...filtered, fn(arr[x], x)]
    }
    return filtered
};