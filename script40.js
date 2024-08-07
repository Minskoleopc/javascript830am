
// function contructor 
function Person(fn,ln,ag,roll){
    this.firstName = fn 
    this.lastName = ln 
    this.age  = ag
    this.roll = roll
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

let amol = new Person("amol","rao",34,23)
let chinmay = new Person("chinmay","deshpande",32,23)

console.log(amol)
console.log(chinmay)

//console.log(amol.__proto__ == parent.protype)
// amol.displayName()
// chinmay.displayName()
// prototype inheritance
// every object has one __proto__ property 
// which is simiar to Parent.prototype

console.log(amol.__proto__ == Person.prototype)
Person.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.country = "india"
amol.displayName()
chinmay.displayName()


console.log(amol.firstName)
console.log(amol.lastName)
console.log(amol.age)
console.log(amol.roll)
console.log(amol.country)






