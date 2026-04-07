// Last updated: 4/8/2026, 2:08:18 AM
function majorityElement(nums: number[]): number {
    let store = {}

    nums.map((item) => {
        if (!store[item]) {
            Object.assign(store, {[item]: 1});
        } else {
            Object.assign(store, {[item]: store[item]+1});
        }
    })   

    let res = null
    let longest = null
    
    for (const prop in store) {
        if (!res || !longest || longest < store[prop]) {
            res = prop
            longest = store[prop]
        }
    }

    return res
};