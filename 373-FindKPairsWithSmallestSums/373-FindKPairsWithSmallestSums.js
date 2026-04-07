// Last updated: 4/8/2026, 2:07:26 AM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    return minHeap(nums1, nums2, k)
};

// Brute force got heap out of memory
const bruteForce = (nums1, nums2, k) => {
    let cached = [] // data type => [total, index of nums1, index of nums2]
    let res = []

    for (let i1 = 0; i1 < nums1.length; i1++) {
        for (let i2 = 0; i2 < nums2.length; i2++) {
            let total = nums1[i1] + nums2[i2]
            cached.push([total, i1, i2])
        }
    }

    cached.sort((a, b) => a[0] - b[0])

    for (let i = 0; i < Math.min(cached.length, k); i++) {
        res.push([nums1[cached[i][1]], nums2[cached[i][2]]])
    }

    return res
}

const minHeap = (nums1, nums2, k) => {
    let res = [] // data type => [total, index of nums1, index of nums2]
    let heap = [] // data type => [total, index of nums1, index of nums2]
    let visited = new Set() 
    let l1 = nums1.length
    let l2 = nums2.length

    if (l1 === 0 || l2 === 0) return res

    heap.push([nums1[0] + nums2[0], 0, 0])
    visited.add('0,0')

    while(k>0 && heap.length) {
        heap.sort((a, b) => b[0] - a[0])

        let [sum, i, j] = heap.pop()
        res.push([nums1[i], nums2[j]])

        if (j+1 < l2 && !visited.has(`${i},${j+1}`)) {
            heap.push([nums1[i] + nums2[j+1], i, j+1])
            visited.add(`${i},${j+1}`)
        }        

        if (j === 0 && i + 1 < l1 && !visited.has(`${i+1},${j}`)) {
            heap.push([nums1[i+1] + nums2[j], i+1, j])
            visited.add(`${i+1},${j}`)
        } 

        k = k-1
    }

    return res
}