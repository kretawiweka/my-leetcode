// Last updated: 4/8/2026, 2:07:09 AM
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let counter = 0
    let isAvailable = true
    if (flowerbed.length === 1 && flowerbed[0] === 0) return n >= 0

    for (let c = 0; c < flowerbed.length; c++) {
       if (flowerbed[c] === 0) {
           if (c === 0) {
               if (isAvailable && flowerbed[c+1] === 0) {
                    counter ++
                    isAvailable = false
               } else {
                   isAvailable = true
               }               
           } else {                                
                if (isAvailable && flowerbed[c-1] === 0 ) {   
                    if (c === flowerbed.length-1) { // last index
                        counter++ 
                        isAvailable = false
                    } else if (flowerbed[c+1] === 0) {
                        counter++ 
                        isAvailable = false
                    }                    
                } else {
                    isAvailable = true
                }
           }
       }
    } 
    console.log(counter)
   
    return counter >= n
};