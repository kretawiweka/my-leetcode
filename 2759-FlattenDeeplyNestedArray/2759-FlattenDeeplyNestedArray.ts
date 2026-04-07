// Last updated: 4/8/2026, 2:05:20 AM
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    const flatten = (array: any, n: number, cycle: number = 0, res: MultiDimensionalArray = []) => {
        for (let i = 0; i < array?.length; i++) {
            if (Array.isArray(array[i]) && cycle < n) {
                flatten(array[i], n, cycle + 1, res)
            } else {
                res.push(array[i])
            }
        }
        return res
    }

    return flatten(arr, n)
};