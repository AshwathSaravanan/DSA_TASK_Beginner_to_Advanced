// write a function that returns the number of negative number in an array

function countNegative(arr) {
    var totalNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<0) {
            totalNumber = totalNumber + 1; // totalNumber++; 
        }
    }
    return totalNumber;
}

let arr = [2, -9, 17, 0, 1, -10, -4, 8];
let totalNegativeNum = countNegative(arr);
console.log(totalNegativeNum);
