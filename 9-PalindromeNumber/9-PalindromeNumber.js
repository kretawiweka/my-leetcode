// Last updated: 4/8/2026, 2:09:21 AM
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(input) {
      let reversedArr = input.toString().split('')

  for (i=0;i<(reversedArr.length-1)/2;i++){
    let a = reversedArr[i]
    reversedArr[i] = reversedArr[(reversedArr.length-1)-i]
    reversedArr[(reversedArr.length-1)-i] = a
  }
  let reversed = parseInt(reversedArr.join(''))

  return input === reversed
};