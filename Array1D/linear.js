//Linear Search

let arr = [];
let arrayValues = prompt("Enter array values : ");
arr = arrayValues.split(" ").map(Number);
console.log(arr);

let element = prompt("Enter value to search : ");
let flag=0;
let pos;
console.log(element);

let n = arr.length;
for(let i=0; i<n; ++i){
	if(arr[i] == element){
		pos = i+1;
		flag=1;
	}
}

(flag==1) ?
 document.getElementById("print").innerHTML = "Element Found at position : " + pos
 : document.getElementById("print").innerHTML = "Element not found";