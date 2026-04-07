// Last updated: 4/8/2026, 2:07:24 AM
function canConstruct(ransomNote: string, magazine: string): boolean {
   let ransomNoteMap = new Map()
   let magazineMap = new Map()
   const ransomNoteArr = ransomNote.split('')
   const magazineArr = magazine.split('')

   ransomNoteArr.map((item) => {
       if (!!ransomNoteMap.get(item)) {
           ransomNoteMap.set(item, ransomNoteMap.get(item) + 1)
       } else {
           ransomNoteMap.set(item, 1)
       }
   })

    magazineArr.map((item) => {
        if (!!magazineMap.get(item)) {
           magazineMap.set(item, magazineMap.get(item) + 1)
       } else {
           magazineMap.set(item, 1)
       }
   })
   
   let output = true

    ransomNoteMap.forEach((val, key) => {
        if (!!magazineMap.get(key)) {               
            if (magazineMap.get(key) < val) {
                output = false
                return
            } 
        } else {
            output = false
            return
        }

    })

    return output
};