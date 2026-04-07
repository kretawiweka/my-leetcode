// Last updated: 4/8/2026, 2:05:32 AM
function createCounter(n: number): () => number {
    let count = n
    let isNextCount = false

    return (): number => {
        if (!isNextCount) {    
            isNextCount = true        
            return n
        }
        count += 1
        return count
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */