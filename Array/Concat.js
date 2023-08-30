//     Array Concat() :- Joins arrays and returns an array with the joined arrays


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);
console.log(children)

//------------------------------------------------------------------

const first = ["Cecilie", "Lone"];
const sec = ["Emil", "Tobias", "Linus"];
const third = ["Robin"];
const result = arr1.concat(sec, third);
console.log(result)

//----------------------------------------------------------------
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(array2);

console.log(mergedArray);
