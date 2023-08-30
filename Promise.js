var abc=()=>{
    let a=10;
    let b=20;
    let ab=a+b;
    return ab;
    
}

const xyz=()=>{
    return new Promise(function(resolve,reject){  
    const flag=true;
      if(flag===true){
      resolve(abc())}
      else{
          reject(); }
  })}
  xyz().then((result) =>console.log("after resolving  - ", result))
  .catch((Error) => console.log("After rejected-  " ,Error));

//-----------------------------------------------------------------------------------------------
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        resolve(data);
      }, 1000); 
    });
  }
  
  fetchData()
    .then((data) => {
      console.log("Data retrieved:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

    //-----------------------------------------------------------------------------------------------
    
    add=()=>{
        let a=10;
        let b=20;
        let ab=a+b;
        return ab;
        
    }
    multiplication=()=>{
        let a=10;
        let b=20;
        let ab=(a*b);
        return ab;
        
    }
    
    const main=()=>{
        return new Promise(function(resolve,reject){  
        const flag=false;
          if(flag===true){
          resolve(add())}
          else{
              reject(multiplication()); }
      })}
      main().then((result) =>console.log("after resolving  - ", result))
      .catch((r) => console.log("After rejected-  " ,r));

      //-------------------------------------------------------------------------------------
      function delay(ms) {
        return new Promise(resolve => {
          setTimeout(resolve, ms);
        });
      }
      
      async function asyncOperation() {
        console.log("Starting async operation...");
      
        try {
          await delay(2000); 
          console.log("Async operation completed successfully!");
          return "Result of async operation";
        } catch (error) {
          console.error("Async operation failed:", error);
          throw error;
        }
      }
      
      asyncOperation()
        .then(result => {
          console.log("Promise resolved with result:", result);
        })
        .catch(error => {
          console.error("Promise rejected with error:", error);
        });
      