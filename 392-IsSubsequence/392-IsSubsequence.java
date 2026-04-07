// Last updated: 4/8/2026, 2:07:30 AM
class Solution {
    public boolean isSubsequence(String s, String t) {
    int i = 0;
    int j = 0;
    while (i < s.length() && j < t.length()) {
        if (s.charAt(i) == t.charAt(j)){
            i++;
        }
            j++;
    }
    return i == s.length();
    }
}


