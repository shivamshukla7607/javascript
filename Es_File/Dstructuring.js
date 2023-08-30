// var arr=["Apple","Mango","banana"];
// var[frist, ,]=arr;     
// console.log(frist);           
// var[frist,second ,]=arr;     
// console.log(frist);           
// var[...arr]=arr;     
// console.log(arr);           

//-------------------------------------------------------
const person = { firstName: 'Alice', lastName: 'Johnson' };

const { firstName: fName, lastName: lName } = person;
console.log(fName); // 'Alice'
console.log(lName); // 'Johnson'

//--------------------------------------------------------

const myObject = { name: 'John', age: 30, city: 'New York' };

const { name, age } = myObject;
console.log(city); // New York
console.log(age); // 30
//--------------------------------------------------------------

const object1 = { name: 'John', age: 30, city: 'New York' };

// Basic object destructuring
const { name1, ag1e } = Object1;
console.log(name1); // 'John'
console.log(age1); // 30