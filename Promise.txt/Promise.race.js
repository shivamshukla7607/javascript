// Promise.race():- iterable object and returns a new promise that fulfills or rejects as soon as there is one promise that fulfills or rejects, 
//                    with the value or reason from that promise.


const promise1 = Promise.resolve(3);
const promise2 = 15;
const promise3 = new Promise((resolve, reject) => {
  resolve("resolve");
});

Promise.race([promise1, promise2, promise3]).then((values) => {
  console.log(values);
}).catch((values)=>{console.log(values)});


//--------------------------------------------------------------------------

const prom1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Resolved 2"),2000)
});
const prom3 = new Promise((resolve, reject) => {
  resolve("resolve 2");
});

Promise.race([prom1, prom3]).then((values) => {
  console.log(values);
}).catch((values)=>{console.log(values)});