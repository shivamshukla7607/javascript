//  Array Slice():- 	Selects a part of an array(index, element), and returns the new array

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus)
console.log(fruits)


//-----------------------------------------------------------------
const numbers = [1, 2, 3, 4, 5];
const slicedNumbers = numbers.slice(1, 4);

console.log(slicedNumbers);

//-----------------------------------------------------------------

const arr = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const result = arr.slice(-3, -1);
console.log(result)
console.log(arr)