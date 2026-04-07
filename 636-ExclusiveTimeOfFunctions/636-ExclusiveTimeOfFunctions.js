// Last updated: 4/8/2026, 2:07:04 AM
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    let output = new Array(n).fill(0)
    let stack = []
    let prevTimestamp = 0
    const START = "start"
    const END = "end"

    for (let i = 0; i < logs.length; i++) {
        let logsArr = logs[i].split(":")
        let id = Number(logsArr[0])
        let event = logsArr[1]
        let timestamp = Number(logsArr[2])

        if (event === START) {
            if (stack.length) {
                output[stack[stack.length - 1]] += timestamp - prevTimestamp
            }
            stack.push(id)
            prevTimestamp = timestamp
        } else {
            let popStack = stack.pop()
            
            output[popStack] += timestamp - prevTimestamp + 1
            prevTimestamp = timestamp + 1
        }
    }
    return output
};