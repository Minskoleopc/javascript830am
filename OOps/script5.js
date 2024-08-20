// program 1  - single inheritance

class Student {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }

}
class Teacher extends Student {
    constructor(fn,ln,sl){
        super(fn,ln)
        this.salary = sl
    }
    displaySalary(){
        console.log(this.salary)
    }
}
let amol = new Teacher("amol","rao",1000)
console.log(amol.firstName)
console.log(amol.lastName)
console.log(amol.salary)
amol.displayName()
amol.displaySalary()
// progrm 2 - multi-level

class GrandFather {

    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln 
    }

    displayGName(){
        console.log(this.firstName + this.lastName)
    }

}

class Father extends GrandFather{
    constructor(fn,ln,ffn){
        super(fn,ln)
        this.fname = ffn
    }

    displayFname(){
        console.log(this.fname + this.lastName)
    }
}

class Son extends Father{
    constructor(fn,ln,ffn,ssn){
        super(fn,ln,ffn)
        this.sname = ssn
    }
    displaySname(){
        console.log(this.sname + this.lastName)
    }
}

let chinmay = new Son("manohar","deshpande","shirish","chinmay")

console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.fname)
console.log(chinmay.sname)

chinmay.displayFname()
chinmay.displayGName()
chinmay.displaySname()


// program 3 - herarchical inheritance

