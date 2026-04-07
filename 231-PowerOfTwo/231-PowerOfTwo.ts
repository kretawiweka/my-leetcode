// Last updated: 4/8/2026, 2:07:54 AM
function isPowerOfTwo(n: number): boolean {    
    if (n === 0) return false
    
    if (n === 1) {
        return true
    } 
    
    if (n%2 === 0) {       
        n = n/2        
        return isPowerOfTwo(n)        
    } 
    
    return false
};