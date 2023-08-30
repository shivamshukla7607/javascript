// let promise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("You are correct way")}
//     ,1000)
//     })
     var promise=new Promise(function(resolve,reject ){
        const flag=false;
        if(flag===true){
            resolve("Resolved")
        }
        else{
            reject("Rejected")
        }
     })
     
    async function f1(){
        try{
-      console.log( await promise);}
catch(error){
    console.log(error)
}
    }
   f1()

    // setTimeout(function(){

    // console.log("-----------------------------------------------------------------------------------------------")
    // let pro=new Promise(function(correct,incorrect){
    //     setTimeout(function(){
    //         if(pro){
    //         correct("okay")}
    //     },1000)
    //     })
        
    //     function f(){
    //         let a=pro;
    //         console.log("You are the f function")
    //     }
        
    //    console.log(f())},2000);

    //     //-----------------------------------------------------------------------------------------------
