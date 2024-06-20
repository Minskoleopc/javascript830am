let a = 100
let b = 50

if (a > b) {
    console.log("a is greater")
}
else {
    console.log("b is greater")
}

// tenary operator 
// expression?statement1:statement2
a > b ? console.log("a is greater") : console.log("b is greater")

// program 2
let age = 17
let e = age >= 18 ? "candrive" : "cannot drive"
console.log(e)

// program 3
// switch case without break statement
let city = "Bhopal"
switch (city) {
    case "pune":
        console.log("MH")
    case "bhopal":
        console.log("MP")
    case "jaipur":
        console.log("RJ")
    default:
        console.log("Incorrect city name")
}

// program 4

// switch case with break 

let city2 = "bhopal"
switch (city2) {
    case "pune":
        console.log("MH")
        break
    case "jaipur":
        console.log("RJ")
        break
    case "bhopal":
        console.log("MP")
        break
    default:
        console.log("incorrect city")
}

// program 3

let city3 = "inoore"
switch (city3) {

    case "nagpur":
    case "pune":
        console.log("MH")
        break
    case "indore":
    case "bhopal":
        console.log("MP")
        break
    case "jaipur":
    case "raipur":
        console.log("RJ")
        break
    default:
        console.log("Incorrect city")
}

let x1 = 10
let x2 = 80
let x3 = 400
let biggest = true

switch (biggest) {

    case x1 > x2 && x1 > x3:
        console.log("x1 is greater")
        break
    case x2 > x1 && x2 > x3:
        console.log("x2 is greater")
        break
    default:
        console.log("x3 is greater")

}


















