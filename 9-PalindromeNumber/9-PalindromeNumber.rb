# Last updated: 4/8/2026, 2:09:16 AM
# @param {Integer} x
# @return {Boolean}
def is_palindrome(number)
    string = number.to_s
     reverse_str = ''
      x = string.length - 1
      while x >= 0
        reverse_str += string[x]
        x -= 1
      end
      if reverse_str == string 
        return true
      else
        return false
      end
end