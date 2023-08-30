// Array splice():- Adds/Removes elements from an array(index, element).



const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits.splice(2, 2));
console.log(fruits)

//----------------------------------------------------------------



const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

fruits1.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits1)

//-------------------------------------------------------------


const numbers = [1, 2, 5, 6];
numbers.splice(2, 0, 3, 4); 
console.log(numbers);


//---------------------------------------------------------
const f = ["apple", "banana", "orange", "grape"];
f.splice(1, 2); // Remove 2 elements starting from index 1

console.log(f); // Outputs: ["apple", "grape"]