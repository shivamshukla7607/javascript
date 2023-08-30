//Bind():- 
//       Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.

function sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
  
  const person = { name: "Shivam"};
  
  const greet = sayHello.bind(person);
  
  greet(); // Output: Hello, Alice!