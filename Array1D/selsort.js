// Selection Sort 

let arr = [];
let inputArray = prompt("Enter array values: ");
arr = inputArray.split(" ").map(Number);
console.log(arr);
let arraySize = arr.length;

const asc = () =>{

    for(let i=0; i<arraySize-1; ++i){
    
        let small = arr[i],pos = i;
        for(let j=i+1; j<arraySize; ++j)
            if(arr[j] < small){
                small = arr[j];
                pos = j;
            }
        
            let temp = arr[i];
            arr[i] = arr[pos];
            arr[pos] = temp;
    }
}

const desc = () => {

    for(let i=0; i<arraySize-1; ++i){
    
        let large = arr[i],pos = i;
        for(let j=i+1; j<arraySize; ++j)
            if(arr[j] > large){
                large = arr[j];
                pos = j;
            }
        
            let temp = arr[i];
            arr[i] = arr[pos];
            arr[pos] = temp;
    }
}

desc();

document.getElementById("print").innerHTML = "Sorted Array : " + arr;