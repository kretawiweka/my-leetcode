// Last updated: 4/8/2026, 2:08:17 AM
1/**
2 * @param {number[]} prices
3 * @return {number}
4 */
5var maxProfit = function(prices) {
6    let maxProfit = 0
7
8    for (let i = 1; i < prices.length; i++) {
9        if (prices[i] > prices[i-1]) {
10            maxProfit += prices[i] - prices[i-1]
11        }
12    }
13
14    return maxProfit
15};