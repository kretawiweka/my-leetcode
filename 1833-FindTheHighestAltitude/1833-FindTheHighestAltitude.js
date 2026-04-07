// Last updated: 4/8/2026, 2:06:02 AM
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let highest = 0
    let position = 0

    for (let i = 0; i < gain.length; i++) {
        position = position + gain[i]
        if (position > highest) {
            highest = position
        }
    }

    return highest
};