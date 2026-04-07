// Last updated: 4/8/2026, 2:05:22 AM
function buyChoco(prices: number[], money: number): number {
    prices.sort((a, b) => a-b)    

    let i = 0
    let spendMoney = prices[0] + prices[1]
    

    if (money - spendMoney < 0) {
        return money
    }
    return money - spendMoney
};