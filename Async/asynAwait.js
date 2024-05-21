
// async function f() {
//     let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000)
//     });
//     let result = await promise; // wait until the promise resolves
//     alert(result); // "done!"
//     }
//     f();



async function check(){
    let a = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("This is checked ✅");
        },3000);
    });

    let result = await a;
   console.log(result);

   console.log("This is after promise ✨");
   
}

check();