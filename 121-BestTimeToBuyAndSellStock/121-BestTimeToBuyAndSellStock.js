// Last updated: 4/8/2026, 2:08:34 AM
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let curLowest = prices[0]
    let highest = 0

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < curLowest) {
            curLowest = prices[i]
        } else {
            let diff = prices[i] - curLowest

            if (diff > highest) {
                highest = diff
            }
        }
    }

    return highest

};