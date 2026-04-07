// Last updated: 4/8/2026, 2:07:40 AM
const isExistValue = (patternArr, map, curVal) => {
    let result = false
    patternArr.forEach((item) => {
        if (map.get(item) === curVal) {
            result = true
            return
        }
    })
    return result
}

function wordPattern(pattern: string, s: string): boolean {
   const sArr = s.split(' ')
   const patternArr = pattern.split('')
   let map = new Map()   
   let i = 0
   if (patternArr.length !== sArr.length) return false
   for (let c of pattern) {
       if (!map.get(c) && !isExistValue(patternArr, map, sArr[i])) {
           map.set(c, sArr[i])
       } else {
           if (map.get(c) !== sArr[i]) return false
       }
       console.log(map)
       i++
   }
   return true
};