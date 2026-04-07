// Last updated: 4/8/2026, 2:08:23 AM
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let operators = ["+", "-", "*", "/"]    
  let stack = []

  for (let i = 0; i < tokens.length; i++) {
    if (!operators.includes(tokens[i])) {
        console.log()
        stack.push(parseInt(tokens[i]))
    } else {
        let secondNumber = stack.pop()
        let firstNumber = stack.pop()
        
        let result
        if (tokens[i] === "+") {
            result = firstNumber + secondNumber
        }
        if (tokens[i] === "-") {
            result = firstNumber - secondNumber
        }
        if (tokens[i] === "*") {
            result = firstNumber * secondNumber
        }
        if (tokens[i] === "/") {
            result = firstNumber / secondNumber
        }


        stack.push(parseInt(result))
    }    
  }
  return stack[0]
};