let a = new Promise((resolve,reject)=>{
   setTimeout(()=>{

    let b = false;
    if(b){
        resolve("B is true 💡");
    }
    else{
        // reject(new Error("B is false 🥴"));
        reject("B is false 🤐");
        // reject(new Error('B is always false 🤐'));
    }

   },5000);
  
}
);
a.then((y)=>{
    console.log(y);
}).catch((reject)=>{
    // console.error(reject);   //You can also do this 🤐
    console.log(reject);
    // console.log(reject.message);
})

//a.catch is not working 🤐

//.message tab hi lagao jab (new Error) use kro 🔴