// Last updated: 4/8/2026, 2:06:30 AM
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let sortedArr = quickSort(arr)

    if (arr.length < 3) {
        return [sortedArr]
    }

    let result = [[sortedArr[0], sortedArr[1]]]
    let minimumDiff = sortedArr[1] - sortedArr[0]

    for (let i = 2; i < arr.length; i++) {
        if (sortedArr[i] - sortedArr[i-1] === minimumDiff) {
            result.push([sortedArr[i-1], sortedArr[i]])
        }

        if (sortedArr[i] - sortedArr[i-1] < minimumDiff) {
            minimumDiff = sortedArr[i] - sortedArr[i-1]
            result = [[sortedArr[i-1], sortedArr[i]]]
        }
    }

    return result
};

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    let pivot = arr[arr.length - 1]
    let right = []
    let left = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}