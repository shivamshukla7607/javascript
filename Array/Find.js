// Array find():- 	Returns the value of the first element in an array that pass a test


//------------------------------------------------------------------
const numbers = [1, 2, 3, 4, 5];
const evenNumber = numbers.find(function(element) {
  console.log("Elements  :-  ",element)
 // return element % 2 === 0;
});

console.log(evenNumber); // Outputs: 2

// //--------------------------------------------------------------------
const fruits = ["apple", "banana", "orange"];

const foundFruit = fruits.find(fruit => fruit === "apple");
console.log(foundFruit); // Outputs: undefined

