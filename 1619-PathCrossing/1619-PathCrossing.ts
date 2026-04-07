// Last updated: 4/8/2026, 2:06:10 AM
function isPathCrossing(path: string): boolean {
    let set: Set<string> = new Set();
    let x = 0, y = 0
    for (let dir of path) {
        set.add(`${x},${y}`)
        if (dir === "N") {
            y += 1
        }
        if (dir === "S") {
            y -= 1
        } 
        if (dir === "E") {
            x += 1
        }
        if (dir === "W") {
            x -= 1
        }

        if (set.has(`${x},${y}`)) return true
    }
    return false
};