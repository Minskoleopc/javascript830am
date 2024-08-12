// Es6
// program 1
class Person {
    firtName = undefined
    lastName = undefined
    age = undefined
    rollNo = undefined

    displayName(){
        console.log(this.firtName + this.lastName)
    }

}

let amol = new Person()
console.log(amol.firstName)
console.log(amol.lastName)
console.log(amol.age)
console.log(amol.rollNo)
amol.displayName()

amol.firstName  = "amol"
amol.lastName  = "rao"
amol.age  = 34
amol.rollNo  = 55

// program 2
// constructor


class PersonB {
    constructor(fn,ln,ag,rn){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag 
        this.rollNo = rn
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let amolB = new PersonB("amolB","raoB",34,55)
console.log(amolB.firstName)
console.log(amolB.lastName)
console.log(amolB.rollNo)
console.log(amolB.age)
amolB.displayName()

// Es6 class with set method

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
let amolC = new PersonC()
console.log(amolC)
amolC.setAge(12)
amolC.setLastName("amolC")
amolC.setFirstName("raoC")
amolC.setRollNo(12)
console.log(amolC)

// Es6 class with set and get keyword 


class PersonD {
    set Fname(fn){
        this.firstName = fn
    }
    set Lname(ln){
        this.lastName = ln
    }
    get Fname(){
        return this.firstName
    }

    get Lname(){
        return this.lastName
    }
}

let amolD = new PersonD()
amolD.Fname ="amolD"
amolD.Lname = "raoD"
console.log(amolD.Fname)
console.log(amolD.Lname)

// Es6 class Bank example

class Bank {

    constructor(fullN, accNo ,bal){
        this.fullName = fullN
        this.accNo = accNo
        this.balance = bal
        this.transactions = []
    }

    deposit(amt){
        this.balance = this.balance + amt
        this.transactions.push(amt)
        return this.balance
    }

    withdrawl(amt){
        if(amt < this.balance){
            this.balance = this.balance - amt
            this.transactions.push(-amt)
            return this.balance
         }
        else {
            console.log('Insufficient amount :'+this.balance)
        } 
    }

    lastFiveTransactions(){
        return this.transactions.slice(-5)
    }


}

let chinmay = new Bank("chinmay deshpande","007",1000)
chinmay.withdrawl(500)
chinmay.deposit(500)
chinmay.withdrawl(5)
chinmay.deposit(50)
chinmay.withdrawl(2)
chinmay.deposit(5)
chinmay.withdrawl(5)
chinmay.deposit(5000)

e = chinmay.lastFiveTransactions()
console.log(e)