//Higher-Order Functions (HOFs):- 
//                             A function which accept the function as an argument and also return the function is known as HOF function.

// function print(d){
//     console.log("Ouput", d);
// }
// function sum(){
//     let a=5;
//     let b=6;
//     let c=a+b;
//     print(c);
// }
// sum(print);

//------------------------------------------------------------------------------------------
// function s(a){
//   console.log("Shivam",a)
// }
// function city(city){

//  return s("Allahabad")
// }
// city(s)

//-----------------------------------------------------------------------------------------
// function applyFunction(fn, value) {
//     return fn(value);
//   }
  
//   function square(x) {
//     console.log( x * x);
//   }
  
//   function double(x) {
//     console.log(x*3);

//   }
  
//  applyFunction(square, 5,applyFunction(double, 3));  
 //------------------------------------------------------------------------------------------
// const arr=[1,2,3,4,5,6]
// console.log(arr.map(item => item*2))
// console.log(arr)
// console.log(arr.filter(item=> item%2===0))

//------------------------------------------------------------------------------------------
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);