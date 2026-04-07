// Last updated: 4/8/2026, 2:06:04 AM
function minDeletions(s: string): number {
    let store = {}
    let sArr = s.split('')  
    let counter = []
    sArr.map((item) => {
       if (!store[item]) {
           store[item] = 1
       } else {
           store[item] = store[item] + 1
       }
    })
    for (let prop in store) {
        counter.push(store[prop])
    }
    counter.sort((a,b) => a-b)    
    let res = 0
    for (let c = 1; c < counter.length; c++) {
        let prevValue = counter.slice(0, c)        
        while (counter[c] !== 0 && prevValue.includes(counter[c])) {
            let val = counter[c]
            counter[c] = counter[c]-1
            res++            
        }
    }    
    return res
};