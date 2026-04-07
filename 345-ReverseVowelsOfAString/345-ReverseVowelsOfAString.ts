// Last updated: 4/8/2026, 2:07:31 AM
function reverseVowels(s: string): string {
   const vowel = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O']
   let store = []

   let sArr = s.split('')

   sArr.map((item) => {
       if (vowel.includes(item)) {
           store.push(item)
       }
   })

   store.reverse()

   for (let x = 0; x < sArr.length; x++) {
       if (vowel.includes(sArr[x])) {
           sArr[x] = store[0]
           store.shift()
       }
   }
   
   return sArr.join('')
};