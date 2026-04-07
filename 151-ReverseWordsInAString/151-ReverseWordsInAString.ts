// Last updated: 4/8/2026, 2:08:21 AM
function reverseWords(s: string): string {
   const sTrim = s.replace(/ +/g, ' ').trim()
   let sTrimArr = sTrim.split(' ')
   sTrimArr.reverse()
   return sTrimArr.join(' ')
};