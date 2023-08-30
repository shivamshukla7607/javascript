//Call():--
//         In JavaScript, you can use the call() method to invoke a function with a specific this value and arguments provided individually.

// function greet(name) {
//     console.log(`Hello, ${name}! My name is ${this.myName}.`);
//   }
  
//   const person = {
//     myName: "John"
//   };
  
//   // Using the call() method to invoke the greet function with the person object as the 'this' value
//   greet.call(person, "Shivam");

  //-----------------------------------------------------------------------

  const person1={
     fName : "Aman", LName: "Singh", func: function(age){console.log(this.fName," ",this.LName," ",age )}
  }
  const person2={   
    fName : "Shivam", LName: "Shukla"}
     person1.func.call(person2 , 20);
