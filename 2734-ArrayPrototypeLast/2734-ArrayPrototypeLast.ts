// Last updated: 4/8/2026, 2:05:29 AM
declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

Array.prototype.last = function() {
    if (!this.length) return -1
    const length = this.length
    return this[length-1]
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

export {};