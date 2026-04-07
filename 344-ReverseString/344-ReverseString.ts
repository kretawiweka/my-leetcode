// Last updated: 4/8/2026, 2:07:33 AM
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    // s.reverse()
    let counter = 1
    s = recursion(s, counter)
};

function recursion(s, counter){    
    let temp = s[counter]
    s.splice(counter, 1)
    if (temp === undefined) return s
    s.unshift(temp)            
    if (counter !== s.length - 1){        
        counter = counter+1
        recursion(s, counter)
    } else {        
        return s
    }        
}