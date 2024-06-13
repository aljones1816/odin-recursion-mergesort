function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    else {
        let leftArr = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
        let rightArr = mergeSort(arr.slice(Math.floor(arr.length / 2), arr.length));

        return merge(leftArr, rightArr);
    }
}

function merge(arrOne, arrTwo) {
    let mergedArr = [];
    while (arrOne.length && arrTwo.length) {
        if (arrOne[0] < arrTwo[0]) {
            mergedArr.push(arrOne.shift())
        } else {
            mergedArr.push(arrTwo.shift())
        }
    }

    return [...mergedArr, ...arrOne, ...arrTwo]

}

const array = [5, 3, 7, 4, 9, 11, 2];

console.log(mergeSort(array));