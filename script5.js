
// conditional statements 
// one input and multiple outcomes 

// music concert 
// numT > 0 && numT <= 5   --------> 5 % discount
// numT > 5 && numT <= 10  --------> 10 % discount
// numT > 10               --------> 20 % discount

// if(condition){
//     // statements
// }

// program 1

let numT = 27

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
else if(numT2 > 5 && numT2 <= 10 ){
    console.log("10 % discount")
}
else if(numT2 > 10){
    console.log("20 % discount")
}
else {
    console.log("incorrect input")
}

// program 3
let marks = 55

// if(marks > 90){
//     console.log('Grade A')
// }
// if(marks >= 75){
//     console.log("Grade B")
// }
// if(marks >= 65){
//     console.log("Grade C")
// }

if(marks > 90){
    console.log('Grade A')
}
else if(marks >= 75){
    console.log("Grade B")
}
else if(marks >= 65){
    console.log("Grade C")
}
else {
    console.log("please try again")
}

// program 5
let a = 10
let b = 50

if(a > b){
    console.log("a is greater")
}
else {
    console.log("b is greater")
}

// program 6
let x1 = 10
let x2 = 20
let x3 = 300

if(x1 > x2 && x1 > x3){
    console.log("x1 is greater")
}
else if(x2 > x3 && x2 > x1){
    console.log("x2 is greater")
}
else {
    console.log("x3 is greater")
}





























