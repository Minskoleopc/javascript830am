let firstName = "chinmay"
console.log(firstName)
console.log(typeof firstName)


// program 1

let firstNamee = "chinmay"
let lastName = 'deshpande'
let middleName = `shirish`

console.log(typeof firstNamee)
console.log(typeof lastName)
console.log(typeof middleName)

// program 2


// number + number  =====> number
// string + number  =====> string 
// number + string  =====> string 
// string + string  =====> string

console.log("I am learning js from chinmay's black book")
console.log('"Try try but donot cry"')


let a = 10 
let b = 5
let c = "hello"
console.log(a+b+c)
// number + number + string
//    15 + "hello"
//      "15hello"

console.log(c+a+b)
// string + number + number
      //"hello10"+5 
        // hello105

//console.log(a+c+b)


// program 3
// String concat

let fname = "chinmay"
let lname = "deshpande"

// My firstname is chinmay and lastName is deshpande
console.log("I am learning js from chinmay's black book")
console.log('"Try try but donot cry"')
console.log("My firstName name is "+fname+" and lastName is "+lname)
console.log(`My firstName name is ${fname} and lastName is ${lname}`)


// C R U D
// Object ------ properties and method

// let names = ["amol","ankit","amol"]
// console.log(names[0])
let namee   = "chinmay"
console.log(namee[0])
//    0    1   2   3   4   5   6
//    c    h   i   n   m   a   y
console.log(namee.length)

// for loop 
for(let i = 0 ; i < namee.length ; i++){
    //console.log(i)
    console.log(namee[i])
}

// while loop 
let i1 = 0
while(i1 < namee.length){
    //console.log(i1)
    console.log(namee[i1])
    i1 = i1 + 1
}

// reverse - for loop
let city2 = "pune"
for(let i = city2.length -1 ; i >= 0 ; i--){
   // console.log(i)
    console.log(city2[i])
}
// reverse - while loop
let i3 = city2.length -1
while(i3 >= 0){
    console.log(city2[i3])
    i3 = i3 - 1
}










































