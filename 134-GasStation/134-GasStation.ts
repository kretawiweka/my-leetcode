// Last updated: 4/8/2026, 2:08:28 AM
function canCompleteCircuit(gas: number[], cost: number[]): number {
    return getStartIndex(gas, cost)
};


const getStartIndex = (gas: number[], cost: number[]): number => {    
    let sumGas = gas.reduce((partialSum, a) => partialSum + a, 0)
    let sumCost = cost.reduce((partialSum, a) => partialSum + a, 0)
    if (sumGas < sumCost) return -1
    
    let total = 0
    let startIndex = 0 
    
    for (let c = 0; c < gas.length; c++) {
        total += (gas[c] - cost[c])
        
        if (total < 0) {
            total = 0
            startIndex = c + 1
        }        
    }
    return startIndex
}