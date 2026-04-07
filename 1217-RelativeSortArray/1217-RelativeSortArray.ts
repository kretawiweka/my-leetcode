// Last updated: 4/8/2026, 2:06:33 AM
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    let result: number[] = []

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] === arr2[i]) {
                result.push(arr1[j])
                arr1[j] = -1
            }
        }
    }

    const sArr1 = arr1.sort((a, b) => a-b)
    for (let i = 0; i < sArr1.length; i++) {
        if (sArr1[i] !== -1) {
            result.push(sArr1[i])
        }
    }

    return result

};