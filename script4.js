// conditional statements 
// one input and multiple outcomes


// live concert 
// numT > 0 && numT <= 5   --- 5 % discount
// numT > 5 && numT <= 10  --- 10 % discount
// numT > 10               ----20 % discount

// if(condition){
//     // statement
// }

// if followed by if ------ every condition will be checked
// if followed else if ---- if first condition is true it will escape other conditions

let numT  = 17

if(numT > 0 && numT <= 5){
    console.log("5 % discount")
}
if(numT > 5 && numT <= 10){
    console.log("10 % discount")
}
if(numT > 10){
    console.log("20 % discount")
}

// program 2 
let numT2 = -17

if(numT2 > 0 && numT2 <= 5){
    console.log("5 % discount")
}
else if(numT2 > 5 && numT2 <= 10){
    console.log("10 % discount")
}
else if(numT2 > 10){
    console.log("20 % discount")
}
else {
    console.log("Incorrect input")
}

// program 3

marks = 55

// if(marks > 90){
//     console.log("Grade A")
// }
// if(marks >= 70){
//     console.log("Grade B")
// }
// if(marks >= 65 ){
//     console.log("Grade C")
// }


if(marks > 90){
    console.log("Grade A")
}
else if(marks >= 70){
    console.log("Grade B")
}
else if(marks >= 65 ){
    console.log("Grade C")
}
else {
    console.log('please try again..')
}

// program 4

let a = 10
let b = 50

if(a > b){
    console.log("a is greater")
}
else {
    console.log("b is greater")
}

// program 5
let x1 = 10
let x2 = 50
let x3 = 200


if(x1 > x2 && x1 > x3){
    console.log("x1 is greater")
}
else if(x2 > x1 && x2 > x3){
    console.log("x2 is greater")
}
else {
    console.log("x3 is greater")
}









