
// ternary operator

let a = 10
let b = 6

if(a > b){
    console.log("a is greater")
}
else {
    console.log("b is greater")
}

//expresssion?StatementOne:Statement2
a > b ?console.log("a is greater"):console.log("b is greater")

let age = 17
let e = age >= 18 ?"candrive":"cannot drive"
console.log(e)


// switch  without break

let city = "Jaipur"

switch(city){
    case "pune":
        console.log("MH")
    case "jaipur":
        console.log("RJ")
    case "indore":
        console.log("MP")
    default:
        console.log("incorrect city name")
}

// switch case with break statement

let city2 = "pune"
switch(city2){
    case "pune":
        console.log("MH")
        break
    case "jaipur":
        console.log("RJ")
        break
    case "indore":
        console.log("MP")
        break
    default:
        console.log("incorrect city name")
}

// switch multiple case 
let city3 = "Bhopal"
switch(city3){
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    case "indore":
    case "bhopal":
        console.log("MP")
        break
    case "updaipur":
    case "jaipur":
        console.log("RJ")
        break
    default:
        console.log("incorrect city name") 

}

