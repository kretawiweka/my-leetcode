// Last updated: 4/8/2026, 2:06:18 AM
function maxScore(s: string): number {
    let max = 0
    let sArr = s.split('').map((item) => Number(item))
    for (let c = 1; c < sArr.length; c++) {
        const leftArr = sArr.slice(0, c)
        const rightArr = sArr.slice(c, sArr.length)
        const initialValue = 0;
        let countLeft = leftArr.reduce(
            (accumulator, currentValue) => currentValue === 0 ? accumulator + 1 : accumulator,
            0,
        );
        let countRight = rightArr.reduce(
            (accumulator, currentValue) => currentValue === 1 ? accumulator + 1 : accumulator,
            0,
        );
        const total = countLeft + countRight                
        if (max < total) {
            max = total
        }
    } 
    return max
};