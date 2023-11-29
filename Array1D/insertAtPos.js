//Program to insrt element at any position of array

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
        let pos = prompt("Enter Position : ");
        
        for(let i=arraySize-1; i>pos-1; --i)
            arr[i] = arr[i-1];

        arr[pos-1] = prompt("Enter element: ");
        insert = prompt("Want to insert more element (y/n): ");
    }while(insert == 'y' || insert == 'Y');
}


let newArray="";
for(let x=0; x<arraySize; x++){
    newArray += arr[x] + " ";
}
document.getElementById("print").innerHTML = "Array : " + newArray;

