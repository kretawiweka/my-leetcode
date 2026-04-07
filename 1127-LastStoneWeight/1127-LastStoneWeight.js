// Last updated: 4/8/2026, 2:06:35 AM
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        let sortedStones = stones.sort((a, b) => b-a)
        let diff = stones[0] - stones[1]
        if (diff === 0) {
            stones.splice(0, 2)
        } else {
            stones[0] = diff
            stones.splice(1, 1)
        }
    }

    if (stones.length) {
        return stones[0]
    }   
    return 0 
};