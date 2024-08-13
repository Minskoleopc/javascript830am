// program 1 
// Es6 class and object

class Person {

    firstName = undefined
    lastName = undefined
    age = undefined

    displayName(){
        console.log(this.firstName + this.lastName)
    }


}

let chinmay = new Person()
let amol = new Person()
console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.age)
chinmay.firstName = "chinmay"
chinmay.lastName = "deshpande"
chinmay.age = 23
chinmay.displayName()

amol.firstName = "amol"
amol.lastName = "rao"
amol.displayName()

// program 2

class PersonB {

    constructor(fn,ln,ag){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }


}
let amolB = new PersonB("amol","rao",23)
amolB.displayName()




// program 3
// with set methods 


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
}

let chinmayD = new PersonC()
console.log(chinmayD)
chinmayD.setFirstName("chinmay")
chinmayD.setLastName("deshpande")
chinmayD.setAge(12)
console.log(chinmayD)

// program 4
// with set and get keyword 


class PersonD {

    set Fname(fn){
        this.firstName = fn
    }

    get Fname(){
        return  this.firstName
    } 

    set Lname(ln){
        this.lastName = ln 
    }

    get Lname(){
        return this.lastName
    }

}

let sarika = new PersonD()
sarika.Fname = "sarika"
sarika.Lname = "pansare"
console.log(sarika.Fname)
console.log(sarika.Lname)


// program 5 
// Bank class

class Bank {

    constructor(fullName,acc,bal){
        this.fullName = fullName
        this.account = acc
        this.balance = bal
        this.transactions = []
    }

    deposit(amt){
        this.balance = this.balance + amt
        this.transactions.push(amt)
        return this.bal
    }

    withdrawl(amt){
        if(amt < this.balance){
            this.balance = this.balance - amt 
            this.transactions.push(-amt)
            return this.balance
        }
        else {
            console.log(`Insufficient balance : ${this.balance}`)
        }


    }

    lastFiveTransactions(){
        return this.transactions.slice(-5)
    }


}
let chinmayE = new Bank("chinmayD","deshhpandeD",34,56)
chinmayE.withdrawl(100)
chinmayE.deposit(200)
chinmayE.deposit(2000)
chinmayE.deposit(2000)
chinmayE.deposit(20000)
chinmayE.deposit(200000)
chinmayE.withdrawl(1000)
console.log(chinmayE.lastFiveTransactions())