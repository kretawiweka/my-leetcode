// Last updated: 4/8/2026, 2:08:55 AM
const sortString = (str: string) => {
    return str.split('').sort().join('')
}

function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>()

    for (let str of strs) {
        let sortedStr = sortString(str)
        let foundKey = map.get(sortedStr)

        if (foundKey) {
            foundKey.push(str)
            map.set(sortedStr, foundKey)
            continue
        }

        map.set(sortedStr, [str])
    }

    return Array.from(map.values())
};