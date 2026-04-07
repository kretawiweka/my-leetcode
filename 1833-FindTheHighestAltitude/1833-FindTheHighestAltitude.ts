// Last updated: 4/8/2026, 2:06:08 AM
function largestAltitude(gain: number[]): number {
    let counter = 0
    let res = counter

    for (let i = 0; i < gain.length; i++) {
        counter = counter + gain[i]
        if (counter > res) {
            res = counter
        }
    }  
    
    return res
};