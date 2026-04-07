// Last updated: 4/8/2026, 2:07:45 AM
function isAnagram(s: string, t: string): boolean {
    return isAnagramWithHash(s, t)
};

const isAnagramWithHash = (s: string, t: string): boolean => {
    if (s.length !== t.length) return false;
    
    const sHash = new Map();
    const tHash = new Map();
    
    
    for (let i = 0; i < s.length; i++) {
        if (sHash.get(s[i])) {
            sHash.set(s[i], sHash.get(s[i]) + 1)            
        } else {
            sHash.set(s[i], 1)
        }
        
        if (tHash.get(t[i])) {
            tHash.set(t[i], tHash.get(t[i]) + 1)            
        } else {
            tHash.set(t[i], 1)
        }
    }
    
    for (let [key, value] of sHash) {
        if (tHash.get(key) !== value) return false
    }

    return true
}