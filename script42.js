// function constructor 

// prototype inheritance 

// function Person(fn,ln,ag){
//     this.firstName = fn 
//     this.lastName = ln 
//     this.age = ag
//     // this.displayName = function(){
//     //     console.log(this.firstName + this.lastName)
//     // }
// }

// let amol = new Person("amol","rao",23)
// let chinmay = new Person("chinmay","deshpande",44)

// console.log(amol)
// console.log(chinmay)


// console.log(amol.__proto__ === Person.prototype)
// Person.prototype.displayName = function(){
//     console.log(this.firstName + this.lastName)
// }
// Person.prototype.country = "india"
// amol.displayName()
// chinmay.displayName()


// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.age)
// console.log(amol.country)
// amol.displayName()
// console.log(amol.hasOwnProperty('country'))


// program 2

// let names = ["chinmay","shirish","sarika","komal"]
// console.log(names)
// names.push("sarika")

// console.log(names.__proto___ === Array.prototype)

// Array.prototype.chinmay = function(){
//     console.log("hello chinmay !")
// }
// names.chinmay()


// program 2


class Person {
    constructor(fn,ln,ag){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag
       
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }

}

let chinmay = new Person("chinmay","shirish","13")
let chinmay1 = new Person("chinmay","shirish","45")
console.log(chinmay)
console.log(chinmay1)















