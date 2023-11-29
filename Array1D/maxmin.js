//Maximum & Minimum of array

let arr = [];
let inputArray = prompt("Enter array values: ");
arr = inputArray.split(" ").map(Number);

let arraySize = arr.length;
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

for(let val of arr){
    if(val > max)
        max = val;
    if(val < min)
        min = val;
}

console.log("Max : ",max);
console.log("Min : ",min);
console.log(this);
