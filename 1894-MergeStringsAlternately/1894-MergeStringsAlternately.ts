// Last updated: 4/8/2026, 2:05:55 AM
function mergeAlternately(word1: string, word2: string): string {
    let w1Arr = word1.split('')
    let w2Arr = word2.split('')
    let res = []

    const length = w1Arr.length > w2Arr.length ? w1Arr.length : w2Arr.length

    for (let i = 0; i < length; i++) {
        if (i < w1Arr.length) {
            res.push(w1Arr[i])
        }
        if (i < w2Arr.length) {
            res.push(w2Arr[i])
        }
    }

    return res.join('')
};