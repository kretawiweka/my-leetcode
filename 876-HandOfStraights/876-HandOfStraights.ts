// Last updated: 4/8/2026, 2:06:47 AM
function isNStraightHand(hand: number[], groupSize: number): boolean {
    return isStraightHand(hand, groupSize)
};

const isStraightHand = (hand: number[], groupSize: number): boolean => {
    if (hand.length % groupSize !== 0) return false
    hand.sort((a, b) => a - b); 
    const arr = []
    
    let countOfGroup = hand.length / groupSize
    
    for (let a = 0; a < countOfGroup; a++) {
        let tempArr = []                        
        for (let b = 0; b < groupSize; b++) {            
            if (tempArr.length == 0) {                   
                tempArr.push(hand[0])                
                // hand.filter((item, index) => {
                //     return index != 0;
                // })
                hand.splice(0,1);
            } else {                
                let consecutive = tempArr[b-1] + 1                
                let consecutiveId = hand.indexOf(consecutive)                                
                if (consecutiveId === -1) {
                    return false
                }
                tempArr.push(consecutive)                
                // hand.filter((item, index) => {
                //     return index != consecutiveId;
                // })
                hand.splice(consecutiveId,1);
            }                        
        }   
        arr.push(tempArr)
        tempArr = []
    }
    console.log(arr)
    return true
}