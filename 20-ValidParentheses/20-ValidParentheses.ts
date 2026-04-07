// Last updated: 4/8/2026, 2:09:09 AM
function isValid(s: string): boolean {
    const sArr = s.split('')
    const openBracket = ['(', '{', '[']
    const bracketMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let store = []
    let res = true

    if (sArr.length === 1) return false

    sArr.forEach((item) => {
        if (openBracket.includes(item)) {
            store.push(item)
        } else {
            const rev = [...store].reverse()            
            if (bracketMap[rev[0]] !== item) {
                res = false                
                return
            }
            store.pop()
        }
    })

    if (!!store.length) return false
    return res
};