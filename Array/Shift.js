// Array Shift :- Shift (remove) the first element of the array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift());
console.log(fruits);

//-------------------------------------------------------------------------

const array = [1, 2, 3, 4, 5];

const firstElement = array.shift();

console.log(firstElement); 
console.log(array)
//-------------------------------------------------------------------------


const emptyArray = [];
const removedItem = emptyArray.shift(); 
console.log("Removed item:", removedItem); //  undefined
console.log("Updated array:", emptyArray); //  []