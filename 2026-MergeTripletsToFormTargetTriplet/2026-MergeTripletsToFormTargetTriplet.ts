// Last updated: 4/8/2026, 2:05:45 AM
function mergeTriplets(triplets: number[][], target: number[]): boolean {
    return isMergeTriplets(triplets, target)
};

//     def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:
//         good = set()
        
//         for t in triplets:
//             if t[0] > target[0] or t[1] > target[1] or t[2] > target[2]:
//                 continue
//             for i, v in enumerate(t):
//                 if v == target[i]:
//                     good.add(i)
//         return len(good) == 3

const isMergeTriplets = (triplets: number[][], target: number[]): boolean => {    
    const n = triplets.length;
    
    let found1 = false;
    let found2 = false;
    let found3 = false;
    
    for (let i = 0; i < n; ++i) {
        const [num1, num2, num3] = triplets[i];
        
        if (num1 == target[0] && num2 <= target[1] && num3 <= target[2]) {
            found1 = true;
        }
        
        if (num2 == target[1] && num1 <= target[0] && num3 <= target[2]) {
            found2 = true;
        }
        
        if (num3 == target[2] && num1 <= target[0] && num2 <= target[1]) {
            found3 = true;
        }
    }
   
    return found1 && found2 && found3;
}