// Last updated: 4/8/2026, 2:05:15 AM
function scoreOfString(s: string): number {
    const sLength = s.length
    let res = 0

    for (let i = 0; i < sLength-1; i++) {
        res = Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1)) + res
        console.log(s.charCodeAt(i), s.charCodeAt(i+1))
    }

    return res
};