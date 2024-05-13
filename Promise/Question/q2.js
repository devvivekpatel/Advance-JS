let prom = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        let z = false;
        if(z==false){
            reject(new Error("It is rejected ❌"));
        }
    },2000)
})

prom.catch((error)=>{
    console.error(error.message);
})