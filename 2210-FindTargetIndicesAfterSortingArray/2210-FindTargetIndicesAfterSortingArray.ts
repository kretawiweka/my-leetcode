// Last updated: 4/8/2026, 2:05:39 AM
function targetIndices(nums: number[], target: number): number[] {
    const numsSort: number[] = nums.sort((a, b) => a - b) 
    let indexStorage: number[] = []    
        
    const index = searchTargetIndex(numsSort, target)
    if (index === null) return []
    
    indexStorage.push(index)
   
    // check higher 
    let higherIndex = index+1    
    if (index !== numsSort.length-1 && numsSort[higherIndex] == target) {
        while (numsSort[higherIndex] == target){
            indexStorage = [...indexStorage, higherIndex]
            higherIndex++            
        }    
    }    
    
    // check lower 
    let lowerIndex = index-1
    if (index !== 0 && numsSort[lowerIndex] == target) {                
        while (numsSort[lowerIndex] == target){
            indexStorage = [...indexStorage, lowerIndex]
            lowerIndex--
        }            
    }
    
    indexStorage = indexStorage.sort((a, b) => a - b) 
    return indexStorage
};

function searchTargetIndex (numsSort: number[], target: number) {    
    let low: number = 0
    let high: number = numsSort.length - 1    
    while (low <= high){    
        let mid: number = Math.trunc((low + high)/2)        
        let middleVal = numsSort[mid]              
        if (middleVal == target) {              
            return mid                        
        } else if (target > middleVal) {
            low = mid+1
        } else {
            high = mid-1            
        }
    }
    return null
}