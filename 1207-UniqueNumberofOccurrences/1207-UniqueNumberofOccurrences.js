// Last updated: 7/30/2026, 6:04:05 AM
1/**
2 * @param {number[]} arr
3 * @return {boolean}
4 */
5var uniqueOccurrences = function(arr) {
6    let map = new Map()
7    let occurrences = []
8    for (let i = 0; i < arr.length; i++) {
9        if (map.has(arr[i])) {
10            let count = map.get(arr[i])
11            let setVal = count + 1
12            map.set(arr[i], setVal)
13        } else {
14            map.set(arr[i], 1)
15        }        
16    }
17
18    for (let [key, value] of map) {
19        if (occurrences.indexOf(value) !== -1) {
20            return false
21        } else {
22            occurrences.push(value)
23        }
24    }
25
26    return true
27};