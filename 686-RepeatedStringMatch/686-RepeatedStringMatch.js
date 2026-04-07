// Last updated: 4/8/2026, 2:06:57 AM
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    // Minimum repeats needed for length
    const minRepeats = Math.ceil(b.length / a.length);
    
    // Build repeated string
    let repeated = a. repeat(minRepeats);
    
    // Check if b is a substring
    if (repeated.includes(b)) {
        return minRepeats;
    }
    
    // Try one more repetition (for boundary cases)
    repeated += a;
    if (repeated.includes(b)) {
        return minRepeats + 1;
    }
    
    // Impossible
    return -1;
};