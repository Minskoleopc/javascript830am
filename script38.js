class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNo = undefined

    displayName(){
        console.log(this.firstName+ this.lastName)
    }
}

let amol = new Person()
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.age)
// console.log(amol.rollNo)

amol.firstName = "amol"
amol.lastName = "rao"
amol.age = 23
amol.rollNo  = 66

console.log(amol.firstName)
console.log(amol.lastName)
console.log(amol.age)
console.log(amol.rollNo)
amol.displayName()

// program 2
// using constructor 


class PersonB {
    // properties
    constructor(fn,ln,ag,rn){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag 
        this.rollNo = rn
    }
    // 
    
  
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let chinmayB = new PersonB("chinmay","deshpande",23,44)
console.log(chinmayB.firstName)
console.log(chinmayB.lastName)
console.log(chinmayB.age)
console.log(chinmayB.rollNo)

// program 3
// set  and get 

class PersonC {
    setFirstName(fn){
        this.firstName = fn
    }

    setLastName(ln){
        this.lastName = ln
    }

    setAge(ag){
        this.age = ag
    }
    setRollNo(rn){
        this.rollNo = rn
    }

}

let poorva = new PersonC()
poorva.setFirstName('poorva')
poorva.setLastName('vyas')
poorva.setAge(20)
poorva.setRollNo(12)
console.log(poorva)

// program 4

// set and get keyword
// set as a property 

class PersonD {
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
        return this.lastName
    }
}

let poorvaB = new PersonD()

poorvaB.Fname = "poorva"
poorvaB.Lname = "vyas"

console.log(poorvaB.Fname)
console.log(poorvaB.Lname)










