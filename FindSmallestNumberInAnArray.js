//Write a Function that returns the minimum number in an array
function findMinimumNumber(arr) {
    let previousminNumber = arr[0];//Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < previousminNumber) {
            previousminNumber = arr[i];
        }
    }
    return previousminNumber;
}

let arr = [5, 0, 7, 10, 8, 17, 1];
let result = findMinimumNumber(arr);

console.log(result);
/*
Solution Document:
https://namastedev.com/learn/namaste-dsa/find-smallest-number-in-an-array-dsa-notes

*/