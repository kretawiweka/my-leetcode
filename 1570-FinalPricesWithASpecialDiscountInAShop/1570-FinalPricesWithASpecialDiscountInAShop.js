// Last updated: 4/8/2026, 2:06:15 AM
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    if (prices.length < 2) return prices


    let indexDisc = 1
    let lastIndex = prices.length - 1
    return prices.map((price, index) => {
        if (index === lastIndex) {
            return price
        }

        for (let i = index + 1; i <= lastIndex; i++) {
            if (prices[i] <= price) {
                return price - prices[i]
            }
        }

        return price
    })
};