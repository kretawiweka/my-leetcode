// Last updated: 7/31/2026, 9:09:19 AM
1/**
2 * @param {number[][]} grid
3 * @return {number}
4 */
5var equalPairs = function(grid) {
6    let count = 0;
7    let n = grid.length;
8    let column = [];
9    let map = new Map();
10
11    for (let r = 0; r < n; r++) {
12        let key = grid[r].join(",");
13        map.set(key, 1 + (map.get(key) || 0));
14    }
15    console.log(map)
16
17    for (let r = 0; r < n; r++) {
18        for (let c = 0; c < grid[r].length; c++) {
19            if (column[c]) {
20                column[c].push(grid[r][c])
21            } else {
22                column[c] = [grid[r][c]]
23            }
24        }
25    }
26
27    for (let c = 0; c < column.length; c++) {
28        let key = column[c].join(",")
29        if (map.has(key)) {
30            count += map.get(key)
31        }
32    }
33
34    return count
35};