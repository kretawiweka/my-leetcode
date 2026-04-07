// Last updated: 4/8/2026, 2:05:41 AM
/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    // [index, item]
    let ticketsWIndex = tickets.map((item, index) => [index, item])
    let counter = 1
    let i = 0
    while (ticketsWIndex.length) {           
        let [indexShift, itemShift] = ticketsWIndex.shift()
        let item = itemShift - 1
        if (indexShift === k && item === 0) {            
            break;
        }     
        if (item !== 0) {
            ticketsWIndex.push([indexShift, itemShift-1])
        }                    
        counter++
    }

    return counter 
};