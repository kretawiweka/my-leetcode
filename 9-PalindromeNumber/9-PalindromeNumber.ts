// Last updated: 4/8/2026, 2:09:23 AM
function isPalindrome(x: number): boolean {
    if (x < 0) return false
    const xStr = x.toString()
    const xArr = Array.from(xStr)
    const xStrReverse = xArr.reverse().join('')
    const isPalindrome: boolean = xStr == xStrReverse
    return isPalindrome
};