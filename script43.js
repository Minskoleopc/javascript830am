// Object literal
// Function constructor 
// Es6 class
// Object.create()


// let amol = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     rollNo:34,
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// amol.displayName()

// function contructor


function Person(fn,ln,ag){
    this.firstName = fn 
    this.lastName = ln 
    this.age   = ag
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}
let amol = new Person("amol","rao",34,55)
let amol2 = new Person("amol2","rao2",34,55)
console.log(amol)
console.log(amol2)

// amol.displayName()
// amol2.displayName()

// Every object has one __proto__ === Parent.prototype

console.log(amol.__proto__ === Person.prototype)
Person.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.country = "India"

amol.displayName()
amol2.displayName()
console.log(amol.hasOwnProperty("country"))

// array
let names = ["sarika","chinmay","ram","sham"]
console.log(names)
names.forEach(function(el){
    console.log(el)
})

// Array.prototype.chinmay  = function(){
//     console.log("hello")
// }
// names.chinmay()


// Es6 class 

// class PersonC {
//     constructor(fn,ln,ag){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.age  = ag
//         // this.displayName = function(){
//         //     console.log(this.firstName + this.lastName)
//         // }
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// PersonC.prototype.displayName = function(){
//     console.log(this.firstName + this.lastName)
// }

// let amol3 = new PersonC("amol3","rao3",34)
// let amol4 = new PersonC("amol4","rao4",34)
// console.log(amol3)
// console.log(amol4)

// amol3.displayName()
// amol4.displayName()


// Program 4
let obj = {
    init:function(fn,ln,ag){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag
    },
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

let amol5 = Object.create(obj)
console.log(amol5)
amol5.init("amol5","rao5",34)
amol5.displayName()


















