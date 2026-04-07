// Last updated: 4/8/2026, 2:08:39 AM
function maxProfit(prices: number[]): number {
    let minPrice: number = Number.MAX_VALUE
    let maxProfit: number = 0
    for (let c = 0; c < prices.length; c++) {
        if (prices[c] < minPrice) {
            minPrice = prices[c]
        } else if (prices[c] - minPrice > maxProfit) {
            maxProfit = prices[c] - minPrice
        }
    }
    return maxProfit
};