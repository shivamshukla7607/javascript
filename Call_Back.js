
   setTimeout(()=>{ const main = (x,y,z, callBack)=>{
        console.log("addition :-"+(x+y+z));
         callBack();}

 m =(x,y)=>{

    console.log("Multiplication :-   "  +x*y);
}
main(5,6,4, m (1,8));},1000);

//--------------------------------------------------------------------------------------------------
setTimeout(()=>{
function fetchData(url, callback) {
    setTimeout(() => {
      callback();
    }, 1000); 
  }
  
  function processUserData(name, id) {
    console.log(id,name);
  }
  fetchData("https://example.com/user", processUserData("shivam",1));},2000);

  //----------------------------------------------------------------------------------------------

  function doSomething(callback) {
    console.log("Doing something...");
    callback();
  }
  
  function onComplete() {
    console.log("Operation completed!");
  }
  
  doSomething(onComplete);

  //-------------------------------------------------------------------------

  function doSomething(user,callback) {
    console.log("Doing something...");
    callback();
  }
  
  function onComplete(name, age, address) {
    console.log(name,age,address);
  }
  
  doSomething(onComplete("shivam",18,"Allahabad"));