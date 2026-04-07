// Last updated: 4/8/2026, 2:05:53 AM
function reductionOperations(nums: number[]): number {
   const sortedNums = nums.sort((a, b) => a - b) 
   let counter = 0;
   for (let i = sortedNums.length - 1; i > 0; i--) {
       if (sortedNums[i] !== sortedNums[i-1]) {
           counter += sortedNums.length - i
       }
   }
   return counter
};