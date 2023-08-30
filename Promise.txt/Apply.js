//Apply():- 
//       Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.

function introduce(name, age) {
    console.log(`Hi, I'm ${name} and I'm ${age} years old. Nice to meet you!`);
  }
  
  const person = {
    name: "Alice",
    age: 30
  };
  
  // Using the apply() method to invoke the introduce function with the person object as the 'this' value
  introduce.apply(person, ["Bob", 25]);

  //---------------------------------------------------------------------------------------------------
  const person1={
    fName : "Aman", LName: "Singh", func: function(age,city){console.log(`First Name: ${this.fName}, Last Name:  ${this.LName}  Age: ${age}   City: ${city} `)}
 }
 const person2={   
   fName : "Shivam", LName: "Shukla"}
    person1.func.apply(person2 ,[20,"Allahabad"]);