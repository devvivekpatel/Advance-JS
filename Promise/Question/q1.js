let a = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        let check = true;
        if(check == true){
            resolve("It is true ✅");
        }

    },1000);
 

   
});

a.then((resolve)=>{
    console.log(resolve);
})