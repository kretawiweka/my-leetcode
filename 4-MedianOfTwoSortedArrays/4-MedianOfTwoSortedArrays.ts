// Last updated: 4/8/2026, 2:09:15 AM
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
   const arr = [...nums1, ...nums2]
   arr.sort((a, b) => a-b)
   const length = arr.length
   if (length % 2 !== 0) {
       return arr[Math.floor(arr.length / 2)]
   } else {
       return (arr[(arr.length / 2) - 1] + arr[(arr.length / 2)]) / 2
   }
};