// Last updated: 4/8/2026, 2:08:11 AM
function hammingWeight(n: number): number {
    let counter: number = 0
    let binary = n.toString(2)
    let binaryArr = binary.split("")
    binaryArr.map((item, index) => {
        if (item !== "0") counter++
    }) 
    return counter
};