 const a= new Promise(function(resolve,reject){
    setTimeout(()=>{
        const flag=true;
        if(flag==true){
            resolve("Best of luck")
        }
        else{
            reject("Go to home")
        }
    },2000)
})  

setTimeout(function(){
    a.then((resulet)=>{console.log(resulet)})
.catch((error)=>{console.log(error)})
.finally(()=>{console.log("Code is over")})
},3000)

setTimeout(function(){
async function m(){
try{
    var c=await  a;
    console.log(c)
}
catch(error){
console.log(error)
}
finally{
    console.log("code is over2")
}
}
m()   },4000)

