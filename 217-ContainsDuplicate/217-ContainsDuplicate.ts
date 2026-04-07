// Last updated: 4/8/2026, 2:07:59 AM
function containsDuplicate(nums: number[]): boolean {
    return isContainsDuplication(nums)
};

const isContainsDuplication = (nums: number[]): boolean => {
    if (nums.length === 0) return false
    
    let numsHash = new Map()
    
    nums.map((item, index) => {
        if (numsHash.get(item)) {
            numsHash.set(item, numsHash.get(item) + 1)            
        } else {
            numsHash.set(item, 1)            
        }
    })
    
    for (let [key, value] of numsHash) {
        if (value > 1) return true
    }    
    
    return false
}