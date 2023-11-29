let arr = [];
console.log(arr);

arr[0] = 5;
console.log(arr);

arr[2] = "5";
console.log(arr);

arr[3] = {a:"a",b:"b"};
arr[4] = () => {
    console.log(5);
}

let type = typeof arr[4];
console.log(type);

console.log(arr.length);
console.log(arr);
