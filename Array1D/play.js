

var button = document.getElementById("debounce");
const debounce = (func, delay) => {
    let debounceTimer
    return function() {
        const context = this
        const args = arguments
            clearTimeout(debounceTimer)
                debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
} 
button.addEventListener('click', debounce(function() {
        alert("clicking the debounce button won’t do anything")
}, 3000));  


// //Creating a javascript 'user' object.
// let user = {
//     get name() {
//       return this._name;
//     },
  
//     set name(value) {
       
//       //This will return an alert if the lenght of the 'value' is less than 4.  
//       if (value.length < 4) {
//         alert("Name is too short, need at least 4 characters");
//         return;
//       }
//       this._name = value;
//     }
//   };
  
//   user.name = "Peter";
//   alert(user.name); 
  
//   user.name = "p"; 
  
















// class Square {
//     constructor(side) {
//         this.side = side;
//     }
//     findPerimeter() {
//         return 4 * this.side;
//     }
    
//     static comparePerimeter(square1, square2) {
//         if (square1.side > square2.side) {
//             console.log("First square has more perimeter");
//         } else if (square1.side < square2.side) {
//             console.log("Second square has more perimeter");
//         } else {
//             console.log("Both have same perimeter");
//         }

//     }

// }

// let square1 = new Square(3);
// let square2 = new Square(7);
// Square.comparePerimeter(square1, square2);














// class Car {
//     constructor(color) {
//         this.color = color;
//     }
    
//     display() {
//         console.log(`This car is ${this.color} in color`);
//     }
    
//     static greet() {
//         console.log('Welcome!');
//     }
// }

// class Skoda extends Car {

//     constructor(color){
//         super(color);
//     }
//     modelName(){
//         console.log(`This is a Skoda and its color is ${this.color}`);
//     }
// }

// Skoda.greet(); // Welcome!
// const c = new Skoda('red');
// c.modelName();












// "use strict"

// Constructor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // Creating instances using the constructor
// const person1 = new Person("Alice", 30);
// const person2 = new Person("Bob", 25);

// console.log(person1.name); // Output: Alice
// console.log(person2.age);  // Output: 25













// "use strict"

// function a(){
//     console.log(this.z);
// }

// let x = {
//     z:1
// };

// let rand = a.bind(x);
// console.log(rand);
// rand();




// const course = function () {}; //adding prototype directly
// course.prototype.name = "javascript";
// const student = new course();
// student.id = 1; //adding property
// console.log( course);


// let company = {
//     name: "A",
//     pay: function () {
//       console.log("Paying");
//     },
//   }; //company object
//   let worker = {
//     id: 1,
//     work: function () {
//       console.log("Working");
//     },
//   }; //worker object
//   worker.__proto__ = company; //worker object inherits company object
//   console.log(worker);
//   worker.pay();

//   const x = {
//     a:1
//   };

// const p1 = new Promise((resolve,reject) => {
//     // setTimeout(() => resolve("p1 success"),2000);
//     setTimeout(() => reject("p1 failed"),1000);
// });
// const p2 = new Promise((resolve,reject) => {
//     // setTimeout(() => resolve("p2 success"),5000);
//     setTimeout(() => reject("p2 failed"),2000);
// });
// const p3 = new Promise((resolve,reject) => {
//     // setTimeout(() => resolve("p3 success"),1000);
//     setTimeout(() => reject("p3 failed"),2000);
// });

// const pr = Promise.any([p1,p2,p3])
// console.log(pr);
// pr.then(res => console.log(res))
// .catch(err => console.log(typeof err));

















// const api_url = "https://api.github.com/users/tarun-chn99";

// async function handlePromise(){

//     const data = await fetch(api_url);
//     console.log(data.json().then((res) => {
//         console.log(res);
//     }));
// }

// handlePromise();
















// function print(){
//     let a=5;
//     setTimeout(() => {
//         console.log(a)
//     }, 2000);
//     console.log("Hello")

// }
// print();



// let time = new Date();
// console.log(time)


// let cart = ["jeans","shirt","wallet"];

// const validate = () => true;
// const promise = createOrder(cart);
// console.log(promise);


// function createOrder(cart){

//     let pr = new Promise(function(resolve,reject){

//         if(!validate()){
//             let err = new Error("Cart failed");
//             reject(err);
//         }
//         let orderId = "121";
//         if(orderId){
//             setTimeout(() =>{
//                 resolve(orderId);
//             },5000);
//         }

//     });

//     return pr;
// }

// promise.then((result) => {
//     console.log(result);
// });






// function x(){
//     let a=1;
//     function y(){
//         console.log(a);
//         a++;
//     }
//     function z(){
//         console.log(z);
//     }
//     return y;
    
// }

// const caller = x();
// console.log(caller);
// caller();





















// let store = {
//     s:1,
//     x: function (){
//         console.log(this.s);
//     }
    
// }
// store.x();

// const student = {
//     name : 'Rohit',
    
//     sayHi: function() {
//         let a1 = this;
//         console.log(`${this.name} says Hi!`)
//     }
// }


// const callSayHi = (sayHi) => {
//     console.log(this);
//     sayHi();
// }
// student.sayHi();
// callSayHi(student.sayHi);



// function a(ob){
// var a1 = 5;
// console.log(a.name);
// console.log(arguments.callee);
// console.log(arguments.length)
// }

// const inner = () => {
//     a(ob,4,7,8);
//     console.log("Inner");
// }

// let ob = {0:0,1:2};
// const x = inner();
// console.log(x);

// function outer(){

//     return function inner(){
//         console.log("Hello");
//     }
// }

// outer()();


// function GrandFather() {
// 	let car = 'Maruti'
// 	console.log("Hi! I'm GrandFather and I can access", car)
// 	function Father() {  //can access car bike
// 		let bike = 'Honda'
// 		console.log("Hi! I'm Father and I can access", car, bike)
// 		function Son() { //can access car bike cycle
// 			let cycle = 'Hero'
// 			console.log("Hi! I'm Son and I can access", car, bike, cycle)
// 		}
// 		return Son()
// 	}
// 	return Father()
// }
// GrandFather()
