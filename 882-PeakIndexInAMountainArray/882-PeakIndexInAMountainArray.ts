// Last updated: 4/8/2026, 2:06:51 AM
function peakIndexInMountainArray(arr: number[]): number {
    // return bigOn(arr)    
    return bigOLogN(arr)
};

function bigOn (arr) {
    let peakIndex: number = 0
    let maxVal: number = 0
    for (let i = 0; i < arr.length; i++) {
        if (maxVal < arr[i]) {
            maxVal = arr[i]
            peakIndex = i
        }
    }
    return peakIndex    
}

function bigOLogN (arr) {
    return binarySearch(arr)
}

function binarySearch (arr) {
    let low = 0
    let high = arr.length - 1    
    let value = arr[Math.trunc((low + high)/2)]
    let result = 0
    
    while (low <= high) {
        let midIndex: number = Math.trunc((low + high)/2) 
        console.log(midIndex, 'midIndex')
        let rightIndex = midIndex + 1
        let leftIndex = midIndex - 1
        
        value = arr[midIndex]
        
        // jika kanan atau kiri lebih besar daripada middle value maka jalan ke kanan atau kiri, jika tidak, maka return index of middleValue
                    
                
        if (value > arr[midIndex+1] && value > arr[midIndex-1]) {
            result = midIndex
            console.log(result, value)
            break;
        } 
        else if((value < arr[midIndex+1] && value > arr[midIndex-1]) || midIndex === 0) {
            low = midIndex+1            
            console.log('1')
            console.log(midIndex, value)
        } else if (value < arr[midIndex-1] && value > arr[midIndex+1]) {
            high = midIndex-1            
            console.log('2')
            console.log(midIndex, value)
        } 
                        
    }
    return result
}