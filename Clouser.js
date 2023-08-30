// Clouser :- 
//         A child function access of each and every properties of it's parents.



function parent(){
    let a=5;
    let b=10;

    function child(){
        console.log(a+b);
    }
    child();
}
parent();

// //-----------------------------------------------------------------------------------
function outerFunction() {
    var outerVariable = "I am from outer function";

    function innerFunction() {
        console.log(outerVariable); 
    }

     innerFunction(); 
}

 outerFunction(); 

 //-----------------------------------------------------------------------------------
 function add(a,b){
    console.log(a+b)
        function multiplication1(){
            console.log(a*b*2);
        }
        multiplication1();
    }
    add(5,2);

//----------------------------------------------------------------------------------------

function outer() {
    let outerVariable = 10;
  
    function inner() {
      console.log(outerVariable); 
    }
  
     inner();
  }
  
 outer();
