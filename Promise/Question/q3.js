// Write a function divide that takes two parameters, numerator and denominator, and returns a promise that resolves with the result of the division if the denominator is not zero, otherwise rejects with an error message "Cannot divide by zero".

function check(numerator , denominator)
{
    let z = new Promise((resolve , reject)=>{

        if(denominator >=1){
             resolve (`Your answer is : ${numerator / denominator} `);
        }
        else {

            reject (new Error("Cannot divide by zero"));

        }
    })
    return z;
}

check(10,4).then((resolve)=>{
    console.log(resolve);
}).catch((error)=>{
    console.error(error.message);
})