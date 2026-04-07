// Last updated: 4/8/2026, 2:08:33 AM
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i-1]) {
            maxProfit += prices[i] - prices[i-1]
        }
    }

    return maxProfit
};