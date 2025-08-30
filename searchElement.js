// Write a function that searches for an element in an array and returns the index,if the element is not present then just return -1
function checkDataIsPresented(arr,data) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}
let arr = [4, 2, 0, 10, 8, 30];
let checkDataAvailable = checkDataIsPresented(arr,30);

console.log(checkDataAvailable);

