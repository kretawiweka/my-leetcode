// Last updated: 4/8/2026, 2:06:32 AM
let cache = {}

function nthTribonacci(n: number): number {    
    if (cache[n]) {
        return cache[n]
    }    

    if (n <= 1) {
        return 0
    } 
    if (n <= 3) {
        return 1
    }

    let calculate =  nthTribonacci(n-1) + nthTribonacci(n-2) + nthTribonacci(n-3) 

    cache[n] = calculate        
    return calculate
}

function tribonacci(n: number): number {
    let res = nthTribonacci(n+1)
    return res
};