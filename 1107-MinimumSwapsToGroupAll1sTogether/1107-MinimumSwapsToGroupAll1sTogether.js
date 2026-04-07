// Last updated: 4/8/2026, 2:06:36 AM
function minSwaps(data) {
    const count1 = data.reduce((acc, val) => acc + val, 0);
    if (count1 === 0 || count1 === 1) {
        return 0;
    }

    let currentZeros = 0;
    for (let i = 0; i < count1; i++) {
        if (data[i] === 0) {
            currentZeros++;
        }
    }

    let minSwaps = currentZeros;
    for (let i = count1; i < data.length; i++) {
        if (data[i - count1] === 0) {
            currentZeros--;
        }
        if (data[i] === 0) {
            currentZeros++;
        }
        minSwaps = Math.min(minSwaps, currentZeros);
    }

    return minSwaps;
}
