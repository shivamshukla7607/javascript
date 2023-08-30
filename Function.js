function add(a,b){
var c=a+b;
console.log("Added number is :- "+c);
return c;
}
add(5,6);

console.log();
//console.log("-----------------------------------------------Arrow function-----------------------------------------------------------------");
console.log()

setTimeout(function() {
const multiply = (a, b) => a * b;

console.log(multiply(4, 6));},5000);

