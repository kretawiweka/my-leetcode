// Last updated: 4/8/2026, 2:05:35 AM
function removeStars(s: string): string {
    const sArr = s.split('')
    let stack = []

    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] === "*") {
            stack.pop()
        } else {
            stack.push(sArr[i])
        }
    }

    return stack.join('')
};