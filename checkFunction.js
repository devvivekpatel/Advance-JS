let fun1 = ()=>{
    console.log("This is fun 1");
    return 5;
}

let fun2 = fun1;
//if you will use return in console only then it will return value of return otherwise not 💡💡
// console.log(fun1());
// fun1();
// fun2();

let fun3 = (a)=>{
   console.log(a());
console.log("This is fun 3");
}
fun3(fun2);