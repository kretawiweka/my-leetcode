// Last updated: 4/8/2026, 2:06:16 AM
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    /**
        Target = [1, 3]
        Target length = 2
        n = 3
        Output = ["Push","Push","Pop","Push"]
        How to count nums of operations ?
        (3 - 2) * 2
    */
    const PUSH = "Push"
    const POP = "Pop"

    let targetLength = target.length
    let numOperation = targetLength + ((target[target.length - 1] - target.length) * 2)
    
    let counter = 1
    let operations = []

    for (let i = 0; i < target.length; i++) {        
        while (counter < target[i]) {
            operations.push(PUSH)
            operations.push(POP)
            counter++
        }
        operations.push(PUSH)
        counter++
    }
    

    return operations
};