// Last updated: 4/8/2026, 2:05:49 AM
/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const sArr = s.split(' ')
    let sortedSentenceArr = getSortedSentenceArr(sArr)
    let res = sortedSentenceArr.toString().replace(/,/g, ' ')    
    return res
};


const getSortedSentenceArr = (sArr) => {
    let sortedSArr = []
    for (let a = 0; a < sArr.length; a++) {   
        let position = Number(sArr[a].charAt(sArr[a].length-1))        
        sortedSArr[position-1] = sArr[a].slice(0, -1)           
    }        
    return sortedSArr
}