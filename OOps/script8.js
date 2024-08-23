// program 1
// class Human {   

//     talk(){
//         console.log("hello hi")
//     }
// }

// class Duck  {
//     talk(){
//         console.log("Quack Quack")
//     }
// }

// function call_talk(obj){
//     obj.talk()
// }

// let amol = new Human()
// let animalOne = new Duck()

// call_talk(amol)
// call_talk(animalOne)

// program 2

// class Human {   

//     talk(){
//         console.log("hello hi")
//     }
// }

// class Duck  {
//     talk(){
//         console.log("Quack Quack")
//     }
// }

// class Dog {
//     bark(){
//         console.log("bow bow")
//     }

// }
// function call_talk(obj){
//     if(typeof obj.talk === "function"){
//         obj.talk()
//     }
//     else if(typeof obj.bark === "function"){
//         obj.bark()
//     }
   
// }

// let amol2 = new Human()
// let animalOne2 = new Duck()
// let dogOne = new Dog()

// call_talk(amol2)
// call_talk(animalOne2)
// call_talk(dogOne)

// functions 

// function declartion

function addition(x,y){
    return x + y
}

let a = addition(12,4)
console.log(a)

// function expression 

let addition2 = function(x,y){
    return x + y
}
let a2 = addition2(23,4)
console.log(a2)

// arrow function

let addition3 = (x,y)=>{
    return x + y     
}
let q3 = addition3(23,4)
console.log(q3)

// if only 1 statement 

let addition4 = (x,y) => x + y 
let q4 = addition4(3,4)
console.log(q4)

// if only one statement one parameter
let addition5 = x => x + x 
let q5 = addition5(3)
console.log(q5)

// lexical scope

// closures 

// what is actual difference between arrow function and function expression