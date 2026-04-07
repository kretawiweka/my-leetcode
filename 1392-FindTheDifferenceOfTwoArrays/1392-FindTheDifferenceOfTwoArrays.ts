// Last updated: 4/8/2026, 2:06:28 AM
function findDifference(nums1: number[], nums2: number[]): number[][] {
   let res1 = []
   let res2 = []

   for (let i = 0; i < nums1.length; i++) {       
       if (nums2.indexOf(nums1[i]) === -1 && res1.indexOf(nums1[i]) === -1){           
           res1.push(nums1[i])
       }
   } 

   for (let i = 0; i < nums2.length; i++) {
        if (nums1.indexOf(nums2[i]) === -1 && res2.indexOf(nums2[i])  === -1){
           res2.push(nums2[i])
       }
   }

    return [res1, res2]
};