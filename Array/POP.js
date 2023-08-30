// Array POP:-
//         Removes the last element of an array, and returns that element and length

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop());
console.log(fruits)

//----------------------------------------------------------------------
const myArray = [1, 2, 3, 4, 5];

const poppedElement = myArray.pop();

console.log(poppedElement); 
console.log(myArray); 

//----------------------------------------------------------------------

const emptyArray = [];

console.log(emptyArray.pop()); // Outputs: undefined
console.log(emptyArray); // Outputs: []