// Last updated: 4/8/2026, 2:07:53 AM

var MyQueue = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x) 
    console.log("push")
    console.log(x, this.stack)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.stack.length) {
        let val = this.stack.shift() 
        return val
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.stack.length) {
        return this.stack[0]
    }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */