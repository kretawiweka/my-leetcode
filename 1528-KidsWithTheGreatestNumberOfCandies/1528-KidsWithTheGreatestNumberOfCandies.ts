// Last updated: 4/8/2026, 2:06:20 AM
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
   let greatest = candies[0]
   let res = []

   for (let i = 0; i < candies.length; i++) {
       if (greatest < candies[i]) {
           greatest = candies[i]
       }
   } 

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= greatest) {
            res.push(true)
        } else {
            res.push(false)
        }
    }

    return res
};