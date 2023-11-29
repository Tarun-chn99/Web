//Reverse Array

let arr = [];
let arrayValues = prompt("Enter array values (size>1) : ");
arr = arrayValues.split(" ").map(Number);
console.log(arr);

const n = arr.length;
let s=0,e=n-1,temp;

while(s<e){
    temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;
    s++;
    e--;
}
console.log(arr);