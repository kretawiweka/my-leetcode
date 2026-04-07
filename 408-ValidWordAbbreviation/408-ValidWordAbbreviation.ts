// Last updated: 4/8/2026, 2:07:21 AM
function validWordAbbreviation(word: string, abbr: string): boolean {
    const wordLength = word.length
    let number = ''
    let tempLength = 0
    let beforeStr = true
    let isTrue = true

    const abbrArr = abbr.split('')
    abbrArr.forEach((item, index) => {        
        if (Number(item) || Number(item) === 0) {
            if (beforeStr && Number(item) === 0) {
                isTrue = false
                return
            }
            if (index === abbrArr.length-1) {                
                tempLength = tempLength + Number(item)
            }             
            number = number + item
            beforeStr = false
        } else if (!beforeStr) {
            tempLength = tempLength + Number(number) + 1
            number = ''

            if (word[tempLength-1] !== item) {                                    
                isTrue = false
                return
            }
         } else {
            tempLength++
            
            if (word[tempLength-1] !== item) {                
                isTrue = false
                return
            }
        }        
    })
    if (!isTrue) return false
    return wordLength === tempLength
};