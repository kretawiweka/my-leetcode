// Last updated: 4/8/2026, 2:08:45 AM
function minWindow(s: string, t: string): string {
 if (s.length === 0 || t.length === 0) return "";
    
    const tMap = new Map<string, number>();
    for (let char of t) {
        tMap.set(char, (tMap.get(char) || 0) + 1);
    }

    let left = 0, right = 0;
    let required = tMap.size;
    let formed = 0;

    const windowCounts = new Map<string, number>();

    let minLength = Infinity;
    let minLeft = 0, minRight = 0;

    while (right < s.length) {
        const c = s[right];
        windowCounts.set(c, (windowCounts.get(c) || 0) + 1);

        if (tMap.has(c) && windowCounts.get(c) === tMap.get(c)) {
            formed++;
        }

        while (left <= right && formed === required) {
            const cLeft = s[left];

            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minLeft = left;
                minRight = right;
            }

            windowCounts.set(cLeft, windowCounts.get(cLeft)! - 1);
            if (tMap.has(cLeft) && windowCounts.get(cLeft)! < tMap.get(cLeft)!) {
                formed--;
            }

            left++;
        }

        right++;
    }

    return minLength === Infinity ? "" : s.slice(minLeft, minRight + 1);
}