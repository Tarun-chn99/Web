//Binary Search


let arr = [];
let flag=0;
let pos;

let arrayValues = prompt("Enter array values (size>1) : ");
arr = arrayValues.split(" ").map(Number);
console.log(arr);
let n = arr.length;
let element = prompt("Enter value to search : ");

let s=0,e=n-1;
while(s<=e){
    
    let mid = Math.floor((s+e)/2);
    if(arr[mid] == element){
        pos = mid+1;
        flag=1;
        break;
    }
    else if(element < arr[mid]){
        e = mid-1;
    }
    else{
        s = mid+1;
    }
}

(flag==1) ?
 document.getElementById("print").innerHTML = "Element Found at position : " + pos
 : document.getElementById("print").innerHTML = "Element not found";