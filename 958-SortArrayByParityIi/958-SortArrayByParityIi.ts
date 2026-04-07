// Last updated: 4/8/2026, 2:06:40 AM
function sortArrayByParityII(nums: number[]): number[] {    
    
    for (let index = 0; index < nums.length; index++) {

        if (!(index % 2 === 0 && nums[index] % 2 === 0) && !(index % 2 !== 0 && nums[index] % 2 !== 0)) {
            
            let swapIndex = index+1;
            
            if (index % 2 === 0) { //  odd value but in even index
                while (nums[swapIndex] % 2 !== 0) {                    
                    swapIndex += 1;
                }
            } else { // even value but in odd index
                while (nums[swapIndex] % 2 === 0) {
                    swapIndex += 1;
                }
            }
            
            let temp = nums[index];
            nums[index] = nums[swapIndex];
            nums[swapIndex] = temp;
        }
    }
    
    return nums; 
};

function traditionalWay (nums: number[]): number[] {
    let resArr: number[] = []
    let evenStorage: number[] = []
    let oddStorage: number[] = []
    
    nums.map((item, index) => {
        if (item % 2 == 0) {             
           evenStorage.push(item)
        } else {
            oddStorage.push(item)
        }        
    })             
    
    for (let counter = 0; counter < nums.length; counter++) {
        if (counter % 2 === 0) {
            resArr = [...resArr, evenStorage[0]]
            evenStorage.shift()
        } else {
           resArr = [...resArr, oddStorage[0]]
            oddStorage.shift()
        }
    }
    
    return resArr    
}