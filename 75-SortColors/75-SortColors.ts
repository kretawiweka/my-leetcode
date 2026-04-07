// Last updated: 4/8/2026, 2:08:47 AM
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    nums.sort()
};

function quickSort(arr) {         
    let pivotIndex = 0    
    let pivot = arr[pivotIndex];
    let less: number[] = [];
    let greater: number[] = [];
    if (arr.length < 2){
        console.log('here')
        return arr
    }    
    
    for (let count = 0; count < arr.length; count++) {        
        if(count === pivotIndex) {
            continue;
        }
        
        if(arr[count] < pivot) {
            less.push(arr[count])
        } else {
            greater.push(arr[count])
        }
        console.log(count)
    }
    
    let lessArr = quickSort(less)
    let greaterArr = quickSort(greater)
    let combineArr = [...lessArr, pivot, ...greaterArr]
    console.log(combineArr)
    return quickSort(combineArr);
}