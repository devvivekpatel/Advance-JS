// Write a function divide that takes two parameters, numerator and denominator, and returns a promise that resolves with the result of the division if the denominator is not zero, otherwise rejects with an error message "Cannot divide by zero".

function check(numerator , denominator)
{
    let z = new Promise((resolve , reject)=>{

        if(denominator >=1){
             resolve("it is",numerator/denominator);
        }
        else if(numerator==0){

            reject (new Error("Numerator is 0"));
             

        }
    })
}

check(10,5).z.then(()=>{
    console.log(resolve);
}).catch((error)=>{
    console.error(error.message);
})