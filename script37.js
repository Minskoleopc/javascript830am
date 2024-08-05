// program 1

// class Person {
//     firstName = undefined
//     lastName = undefined
//     age = undefined
//     rollNo = undefined
// }

// let amol = new Person()
// let chinmay = new Person()
// console.log(amol)
// console.log(chinmay)

// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.age)
// console.log(amol.rollNo)

// // .dot notation and bracket notation
// amol.firstName = "amol"
// amol.lastName = "rao"
// amol.age = 34
// amol.rollNo = 55

// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:34,
//     rollNo:55
// }

// program 2
// Setting the value at the time of object creation

class PersonB {

    constructor(fn,ln,ag,rollNo){
        this.firstName = fn
        this.lastName  = ln
        this.age = ag 
        this.rollNo = rollNo
    }
}

let amolB = new PersonB("amol","rao",34,45)
console.log(amolB)
amolB.city = "pune"
console.log(amolB)
let chinmayB = new PersonB("chinmay","deshpande",45,66)
console.log(chinmayB)

// program 3
// Setting the value using get and set methods

class PersonC {
    setAge(ag){
        this.age = ag
    }
    setRollNo(rn){
        this.rollNo = rn
    }
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName  = ln
    }
}
let amolC  = new PersonC()
console.log(amolC)
amolC.setFirstName("amolc")
amolC.setLastName("amolc")
amolC.setRollNo(24)
amolC.setAge(45)
console.log(amolC)
amolC.city = "pune"
// program 4

// set and get keyword

let info = {
    firstName:"chinmay",
    lastName:"deshpande"
}
info.firstName = "tanmay"

class PersonD{

    set Fname(fn){
        this.firstName = fn
    }

    get Fname(){
        return this.firstName
    }

    set Lname(ln){
        this.lastName = ln
    }

    get Lname(){
        return  this.lastName
    }

}

let amolD  = new PersonD()

amolD.Fname = "amolD"
console.log(amolD.Fname)

amolD.Lname = "RaoD"
console.log(amolD.Lname)



