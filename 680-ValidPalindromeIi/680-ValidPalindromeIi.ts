// Last updated: 4/8/2026, 2:06:58 AM
function validPalindrome(s: string): boolean {
    return validPalindromeChecker(s)
};

const validPalindromeChecker = (s, haveDeleted = false) => {
    let l = 0;
    let r = s.length - 1;
    console.log(l, r)
    console.log(s, haveDeleted)
    while (l < r) {
        if (s[l] !== s[r]) {
            if (haveDeleted) return false;
            return validPalindromeChecker(s.substring(l, r), true) || validPalindromeChecker(s.substring(l+1, r+1), true);
        }
         
        l++;
        r--;
    }
    
    return true;
};