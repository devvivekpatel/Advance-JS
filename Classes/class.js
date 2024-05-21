class car{

    // console.log("hello"); it will not work 🤐

    constructor(name , avg , color , model){

        this.name = name;
        this.avg = avg;
        this.color = color;
        this.model = model;
        console.log("Name is ",this.name);
        console.log("Average is ",this.avg);
        console.log("Color is  ",this.color);
        console.log("MOdel is ",this.model);
        
        console.log(); //for new line
        console.log();
    }

    //this keyword will not work in function it is used for constructor 🤐
    details(name , avg, color, model){
        console.log("CAr name is : ",name);
        console.log("CAr avg is : ",avg);
        console.log("CAr color is : ",color);
        console.log("CAr model is : ",model);
    }
}

let bmw = new car("Tesla",50,"Yellow","iQ");
bmw.details("ferrari",44,"red","i10");


// process.stdout.write('Hello, world!\n')

console.log();
for(let i=1; i<=5; i++){
    for(let j=1; j<=5; j++){
        process.stdout.write(" * ");
    }
    console.log();
}

for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write("* ");
    }
    console.log();
}
console.log();

for(let i=5; i>=1; i--){
    for(let j=1; j<=i; j++){
        process.stdout.write("* ");
    }
    console.log();
}

console.log();
for(let i=5; i>=1; i--){
    for(let j=1; j<i;j++){
        process.stdout.write(" ");
    }
    for(let k = 5; k>=i; k--){
        process.stdout.write("* ");
    }
    console.log();
}

console.log();
for(let i=5; i>=1; i--){
    for(let j=1; j<i;j++){
        process.stdout.write(" ");
    }
    for(let k = 5; k>=i; k--){
        process.stdout.write("*");
    }
    console.log();
}