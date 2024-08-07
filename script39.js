// object 
// Properties and methods 

// object literal 


let amol = {
    firstName:"amol",
    lastName:"rao",
    age:23,
    display:function(){
        console.log(this.firstName+ this.lastName)
    }
}

console.log(amol.firstName)
console.log(amol.lastName)
console.log(amol.age)
amol.display()

// function constructor 

function Person(fn,ln,ag){
    this.firstName = fn 
    this.lastName = ln 
    this.age = ag
    this.displayName = function(){
        console.log(this.firstName + this.lastName)
    }

}

let amol2 = new Person("amol2","rao2",34)
console.log(amol2.firstName)
console.log(amol2.lastName)
console.log(amol2.age)
amol2.displayName()

let chinmay2 = new Person("chinmay","deshpande",34)
console.log(chinmay2.firstName)
console.log(chinmay2.lastName)
console.log(chinmay2.age)
chinmay2.displayName()

// Es6 class 
class PersonC {
    constructor(fn,ln,ag){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }


}

let chinmayC = new PersonC("chinmay","deshpande",45)
console.log(chinmayC.firstName)
console.log(chinmayC.lastName)
console.log(chinmayC.age)
chinmayC.displayName()


// object.create method
let chinmayE = Object.create({})
console.log(chinmayE)
chinmayE.firstName = "chinmayE"
chinmayE.lastName = "deshpandeE"
chinmayE.age = 23
chinmayE.displayName = function(){
    console.log(this.firstName + this.lastName)
}
console.log(chinmayE)
chinmayE.di
