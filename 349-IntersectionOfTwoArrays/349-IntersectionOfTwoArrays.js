// Last updated: 4/8/2026, 2:07:28 AM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let nums1Sort = nums1.sort()
    let nums2Sort = nums2.sort()
    let res = getIntersection(nums1Sort, nums2Sort)
    return res
};

const getIntersection = (nums1Sort, nums2Sort) => {
    let intersectionArr = []
    if (nums1Sort.length > nums2Sort.length) {
        nums2Sort.map((item) => {
            let found = nums1Sort.includes(item)     
            if (found) {                
                if (!intersectionArr.includes(item)) {
                    intersectionArr.push(item)
                }
            }
        })
    }
    else {    
        nums1Sort.map((item) => {
            let found = nums2Sort.includes(item)     
            if (found) {                
                if (!intersectionArr.includes(item)) {
                    intersectionArr.push(item)
                }
            }
        })   
     }
 
    return intersectionArr
}