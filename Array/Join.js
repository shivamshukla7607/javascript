//Array Join() :- 	Joins all elements of an array into a string

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join();
console.log(text);

//-----------------------------------------------------------
const numbers = [1, 2, 3, 4, 5];

const joinedNumbers = numbers.join();

console.log(joinedNumbers); 
//----------------------------------------------------------
const mixedArray = [1, "two", 3, "four", 5];

const joinedMixedArray = mixedArray.join(" - ");

console.log(joinedMixedArray);