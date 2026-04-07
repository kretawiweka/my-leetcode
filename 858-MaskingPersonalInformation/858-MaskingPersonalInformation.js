// Last updated: 4/8/2026, 2:06:48 AM
/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function(s) {
    let isEmail = s.includes('@')

    if (isEmail) {
        let sArr = s.split('')
        sArr = sArr.map((item) => item.toLowerCase())
        let atIndex = sArr.indexOf('@')
        let resArr = []

        resArr.push(sArr[0].toLowerCase())
        resArr.push('*****')
        resArr.push(sArr[atIndex - 1])
        resArr = [...resArr, ...sArr.slice(atIndex, sArr.length)]
        return resArr.join('')
    } else {
        const stripped = s.replace(/\D/g, '');
        const lastFour = stripped.slice(stripped.length - 4);
        if (stripped.length === 10) {
            return `***-***-${lastFour}`;
        } else {
            return `+${'*'.repeat(stripped.length - 10)}-***-***-${lastFour}`
        }
    }
};