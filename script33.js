// object literals 

let chinmay = {
    firstName:"chinmay",
    lastName:"shirish",
    age:24,
    rollNo:34
}

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:23,
    rollNo:34
}

// user defined data type

class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollno = undefined
}

let amol2 = new Person()
let amol3 = new Person()

console.log(amol2)

amol2.firstName = "amol2"
amol2.lastName = "rao"
amol2['age'] = 23
amol2['rollno'] = 55

console.log(amol2)

// Set() and Map()