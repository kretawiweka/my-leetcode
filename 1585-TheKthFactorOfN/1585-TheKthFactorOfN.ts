// Last updated: 4/8/2026, 2:06:13 AM
function kthFactor(n: number, k: number): number {
    let factors = []
    for (let i = 0; i <= n; i++) {
        if (n % i === 0){
            factors.push(i)
        }
    }   
    
    if (factors.length > k-1) {
        return factors[k-1]
    } else {
        return -1
    }
};