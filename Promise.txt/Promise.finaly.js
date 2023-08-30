// Promise.Finally():-
//                  The finally() method is always executed whether the promise is fulfilled or rejected.
//                     In other words, the finally() method is executed when the promise is settled.

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
    console.log(value);}).catch((value)=>{console.log(value);}).finally(()=>{console.log("Code is over");});

    //-------------------------------------------------------------------------------------------------------------

    const promise1 = Promise.resolve(3);
const promise2 = 15;
const promise3 = new Promise((resolve, reject) => {
  resolve("resolve");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
}).catch((values)=>{console.log(values)}).finally(()=>{console.log("Code is over");});

