// Last updated: 4/8/2026, 2:07:29 AM
const sortObj = (obj, k) => {
    return  Object.entries(obj)
        .sort((a, b) => Number(b[1]) - Number(a[1]))
        .slice(0, k)
        .map(v => Number(v[0]));
}

function topKFrequent(nums: number[], k: number): number[] {
    /**
    obj ={
        key: sum of frequent element
    }
     */
    let obj: { [key: number]: number } = {};

    for (const n of nums) {
        if (obj[n] === undefined) obj[n] = 0;
        obj[n] += 1;
    }

    return sortObj(obj, k)
};