
// array
let x = 10
console.log(x)

// array 

let numbers = [11, 22, 33, 44, 55]
let cities = ["nagpur", "pune", "chennai", "kolkata"]
let canDrive = [true, false, true, false]
let info = ["chinmay", "shirish", "deshpande", 7709292441]

// program 1
//               0        1           2          3
let country = ["india", "pakistan", "srilanka", "bangladesh"]
console.log(country[0])
console.log(country[1])

// Object ---- properties and method
// Array --- Object ---- Properties and Method


// program 2
//             0        1         2       3
let fruits = ["apple", "mango", "banana", "orange"]
let a = fruits.length
console.log(a)
console.log(typeof a)


// for loop 
//                   0         1          2          3 
let vegetables = ["tomato", "potato", "cauliflower", "brinjal"]

for (let i = 0; i < 4; i++) { // 1 // 2 // 3 // 4
    //console.log(i) // 0 // 1 // 2 //3
    console.log(vegetables[i])
}

//               0      1        2       3         4
let flowers = ["rose", "lily", "jasmine", "lotus", "marrygold"]
for (let i = 0; i < flowers.length; i++) {
    //console.log(i)
    console.log(flowers[i])
}

// reverse with for 
// length-1 is always the last index
//           0      1        2       3         4
flowers = ["rose", "lily", "jasmine", "lotus", "marrygold"]

for (let i = flowers.length - 1; i >= 0; i--) {
    //console.log(i)
    console.log(flowers[i])
}

// program 3
// while loop 
//           0   1    2   3   4  5 
let marks = [11, 22, 33, 44, 55, 66]

let i1 = 0
while (i1 < marks.length) {
    //console.log(i1)
    console.log(marks[i1])
    i1 = i1 + 1
}

// reverse with while
let i2 = marks.length -1

while(i2 >= 0){
    console.log(marks[i2])
    i2 = i2 - 1
}


