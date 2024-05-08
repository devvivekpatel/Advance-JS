console.log("hello world");
let a = true;

let b = new Promise((function(resolve,reject){
    if(a){
        console.log("Everything is good ✅");
    }
    else{
        console.log("Everything is not good ❌");
    }
}));

