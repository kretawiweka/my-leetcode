// Last updated: 4/8/2026, 2:08:40 AM
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let c2 = 0
    for (let c1 = m; c1 < m+n; c1++) {
        nums1[c1] = nums2[c2]
        c2++
    } 
    nums1.sort((a, b) => a-b)
};