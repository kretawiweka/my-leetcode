// Last updated: 4/8/2026, 2:05:25 AM
type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    return arr.filter((item, index) => fn(item, index))  
};