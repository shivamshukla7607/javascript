// Promise.any():- If one of the promises in the iterable object is fulfilled, the Promise.any() returns 
//                    a single promise that resolves to a value which is the result of the fulfilled promise:



const pErr = new Promise((resolve, reject) => {
    reject("Always fails");
  });
  const pFast = new Promise((resolve, reject) => {
    setTimeout(resolve ("Done quick"),1000);
  });
  const pSlow = new Promise((resolve, reject) => {
    resolve ( "Done eventually");
  });
  
  Promise.any([pErr, pSlow, pFast]).then((value) => {
    console.log(value);}).catch((value)=>{console.log(value);})


    //------------------------------------------------------------------------------------------------

    const prom2 = 42;
const prom1 = Promise.reject("Name");
const prom3 = new Promise((resolve, reject) => {
  setTimeout(reject("Rejected"));
});

Promise.any([prom2, prom1, prom3]).then((values) => {
  console.log(values);
}).catch((values)=>{console.log(values)});

//-------------------------------------------------------------------------------------------------------
const promise1 = Promise.reject(3);
const promise3 = new Promise((resolve, reject) => {
  resolve("resolve");
});

Promise.any([promise1, promise3]).then((values) => {
  console.log(values);
}).catch((values)=>{console.log(values)});
