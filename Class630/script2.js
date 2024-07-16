// Gym 
// action - exercise()
// return - health()

// push()
//              0         1        2       3
let names = ["chinmay","sarika","sachin","poorva"]
console.log(names)
let q1 =names.push("sanchita")
console.log(q1)

// unshift()

let fruits = ["apple","mango","banana","grapes"]
let q2 = fruits.unshift("papaya")
console.log(q2)
console.log(fruits)

// shift()

let cars = ["audi","bmw","mercedes","maruti"]
let q3 = cars.shift()
console.log(q3)
console.log(cars)

// pop()
vegetables = ["brinjal","tomato","potato","cabbage"]
let q4 = vegetables.pop()
console.log(q4)
console.log(vegetables)

// includes()
let vehicles = ["audi","mercedes","scooter"]
let q5 = vehicles.includes("Audi")
console.log(q5)
// at()
//               0         1          2           3
let country = ["india","pakistan","srilanka", "bangladesh"]
let q6 = country.at(1)
console.log(q6)

// indexOf()
let q7 = country.indexOf("Pakistan")
console.log(q7)

// reverse()
let fruitsV = ["apple","mango","banana",'grapes']
let q8 = fruitsV.reverse()
console.log(q8)

// concat()

let fruitsA = ["apple","mango","banana","grapes"]
let fruitsB = ["papaya"]
let fruitsC = fruitsA.concat('fruitsB')
console.log(fruitsC)

//join()

let info = ["chinmay","shirish","deshpande"]
let q9 = info.join("-")
console.log(q9)