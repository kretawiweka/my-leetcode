// Last updated: 4/8/2026, 2:09:18 AM
class Solution {
public:
    bool isPalindrome(int x) {
          bool isPal = true;

          if(x < 0){
            isPal = false;
            return isPal;
          }
          else if(x == 0){
            return isPal;
          }

          std::string str;
          std::stringstream ss;
          ss << x;
          ss >> str;

          for(int i = 0; i < str.length()/2; i++){
            if(str[i] != str[str.length()-1-i]){
              isPal = false;
              break;
            }
          }

          return isPal;
    }
};