//Write a Function that returns the largest number in an array

function findLargestNumber(arr) {
    let previousmaxNumber=null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > previousmaxNumber) {
            previousmaxNumber = arr[i];
        } 
    }
    return previousmaxNumber;
}

let arr = [5, 0, 7, 10, 8, 17, 1];
let result = findLargestNumber(arr);

console.log(result);
