// Promise.all():- Static method takes an iterable of promises as input and returns a single Promise. 
//                 This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), 
//                  with an array of the fulfillment values.It rejects when any of the input's promises rejects, with this first rejection reason.
//(it is iterable of promise , if all promise resolve the get all values and if any promise reject then get error onle)

const promise1 = Promise.resolve(3);
const promise2 = 15;
const promise3 = new Promise((resolve, reject) => {
  resolve("resolve");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
}).catch((values)=>{console.log(values)});

// //--------------------------------------------------------------------------------------------------------

const prom2 = 42;
const prom1 = Promise.reject("Name");
const prom3 = new Promise((resolve, reject) => {
  setTimeout(reject("Rejected"));
});

Promise.all([prom2, prom1, prom3]).then((values) => {
  console.log(values);
}).catch((values)=>{console.log(values)});

//----------------------------------------------------------------------------------------------------------
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 1000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 2000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("three"), 3000);
  });
  const p4 = new Promise((resolve, reject) => {
    setTimeout(() => reject("four"), 4000);
  });
  const p5 = new Promise((resolve, reject) => {
    reject(new Error("reject"));
  });
  
  Promise.all([p1, p2, p3, p4, p5])
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.error(error.message);
    });