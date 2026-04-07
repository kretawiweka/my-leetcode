// Last updated: 4/8/2026, 2:08:56 AM
function jump(nums: number[]): number {    
    let res = 0
    let l, r
    l = 0
    r = 0
    
    while (r < nums.length - 1) {
        let farthest = 0        
        for (let c = l; c <= r; c++) {
            let counter = c+nums[c]
            farthest = Math.max(farthest, counter)                   
        }        
        l = r+1
        r = farthest 
        res += 1        
    }
    return res
};

// const getSolution = (nums: number[]) => {
//     let res = 0
//     let l, r = 0    
    
//     while (r < nums.length - 1) {
//         let farthest = 0
//         for (let c = l; c <= r; c++) {
//             farthest = Math.max(farthest, c + nums[c])            
//         }
//         l = r+1
//         r = farthest 
//         res += 1        
//     }
//     return res
// }

const getMinimalJump = (nums: number[]) => {    
    let goal = nums.length - 1 
    let i = []
    let counter = 0
    
    for (let c = nums.length - 1; c >=0; c--) {
        if (c + nums[c] >= goal) {
            goal = c            
            // if (nums[goal]+)
        }        
    }
    
    if (goal === 0) {
        return true
    } else {
        return false
    }
}