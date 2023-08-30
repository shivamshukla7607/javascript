// var string1="My Name Is Shivam";
// let rev= string1.split("").reverse().join("");
// console.log(rev);
//


function isPrime(num) {
    let temp=0;
    if (num <= 1) {
        return false;
    }
    else{
        for(let a=2; a<num; a++){
            if(num%a===0){

            temp=temp+1;
    }else{
        temp=temp;};
        }
        if(temp>0){
            
        } else{
        console.log("prime num",num)}
    }
}

let arr = [1, 2, 3, 4, 5];
let primeNumbers = arr.filter(num => isPrime(num));

//console.log(primeNumbers);



