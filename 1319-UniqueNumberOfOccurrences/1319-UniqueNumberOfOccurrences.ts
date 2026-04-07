// Last updated: 4/8/2026, 2:06:29 AM
function uniqueOccurrences(arr: number[]): boolean {
    let occurences = []
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
       if (!!map.get(arr[i])) {
           map.set(arr[i], map.get(arr[i])+1)
       } else {
           map.set(arr[i], 1)
       }
    }

    const keys = map.keys();
    for (let key of keys) {
        if (occurences[map.get(key)]) return false
        occurences[map.get(key)] = map.get(key)
    }
    
    console.log(occurences)
    return true
};