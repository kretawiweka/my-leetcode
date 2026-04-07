// Last updated: 4/8/2026, 2:06:22 AM
/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function(target) {

    if (target.length === 1) 
        return target[0] === 1;

    const maxHeap = new MaxPriorityQueue(); 
    let total = 0;

    for (let num of target) {
        maxHeap.enqueue(num);
        total += num;
    }

    while (true) {
        let x = maxHeap.dequeue();
        let rest = total - x;

        if (x === 1 || rest === 1) return true;
        if (rest === 0 || x < rest || x % rest === 0) return false;

        let prev = x % rest;
        total = rest + prev;
        maxHeap.enqueue(prev);
    }

    return false;
};