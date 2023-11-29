// Bubble Sort

let arr = [];
let inputArray = prompt("Enter array values: ");
arr = inputArray.split(" ").map(Number);
console.log(arr);
let arraySize = arr.length;


const asc = () => {
    
    for(let i=0; i<arraySize; ++i)
        for(let j=0; j<arraySize-i-1; ++j)
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
}

const desc = () => {

    for(let i=0; i<arraySize; ++i)
        for(let j=0; j<arraySize-i-1; ++j)
            if(arr[j] < arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }

}

let type = typeof asc;
console.log(type);
document.getElementById("print").innerHTML = "Sorted Array : " + arr;