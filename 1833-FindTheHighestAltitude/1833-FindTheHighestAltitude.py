# Last updated: 4/8/2026, 2:05:57 AM
class Solution(object):
    def largestAltitude(self, gain):
        i = 0
        j = 0

        for g in gain:
            i += g
            j = max(j, i)

        return j      