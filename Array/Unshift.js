//Array unshift():- 	Adds new elements to the beginning of an array, and returns the new length

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.unshift("Lemon","Pineapple"));
console.log(fruits);

//----------------------------------------------------------
const array = [2, 3, 4, 5];

const newLength = array.unshift(1);

console.log(newLength); 
console.log(array); 

//------------------------------------------------------------
const f = ["banana", "apple"];

const n = fruits.unshift("orange", "grape");

console.log(n); 
console.log(f);