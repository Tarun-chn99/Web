//Program to insrt element at start of array

let arr = [];
let inputArray = prompt("Enter array values: ");
arr = inputArray.split(" ").map(Number);
console.log(arr);
let arraySize = arr.length;

document.getElementById("print").innerHTML = "Given Array : " + arr;
let insert = prompt("Want to insert element (y/n): ");


if(insert == 'y' || insert == 'Y'){
    do{
        arraySize++;
        for(let i=arraySize-1; i>0; --i)
            arr[i] = arr[i-1];

        arr[0] = prompt("Enter element: ");
        insert = prompt("Want to insert more element (y/n): ");
    }while(insert == 'y' || insert == 'Y');
}


let newArray="";
for(let x=0; x<arraySize; x++){
    newArray += arr[x] + " ";
}
document.getElementById("print").innerHTML = "New Array : " + newArray;

