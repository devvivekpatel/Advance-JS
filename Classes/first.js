console.log("hello world");
class first{
    constructor(name, age, college){
        this.name = name;
        this.age = age;
        this.colloege = college;

    }

    print(){
        console.log(this.age);
        return `${this.name} is your name`;
    }
}

let one = new first("Vivek",15,"TRS COLLEGE REWA");
console.log(one.print());