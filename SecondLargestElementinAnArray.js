
function getSecondLagrestElement(arr){
    let firstLargestNumber= -Infinity;
    let secondLargestNumber= -Infinity;
    let threeLargestNumber= -Infinity;
    let fourLargestNumber=-Infinity;
    let fiveLargestNumber = -Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>firstLargestNumber){
            secondLargestNumber=firstLargestNumber;
            firstLargestNumber=arr[i];
        }else if(arr[i]>secondLargestNumber){
           secondLargestNumber= arr[i];
        }
        
    }
    return firstLargestNumber;
}

// Me & Akash Bro Solved

let arr = [10,23,15,21,30,50,20,25,40];
let index = arr.indexOf(50);
console.log(index);

function getSecond (arr){

   let second = Math.max(...arr);
   for (let i = 0; i< arr.length;i++){
       if(arr[i]==second){
       arr.splice(i,1);
       }
   }

    let second1 = Math.max(...arr);
   return second1;
   
}

let result = getSecond(arr);
console.log(result);
