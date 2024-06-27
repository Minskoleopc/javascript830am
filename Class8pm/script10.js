// let numbers = [11,22,33,44,55]
// let q1 = numbers.every(function(el){
//     return el > 20
// })
// console.log(q1)

// let q2 = numbers.some(function(el){
//     return el > 200
// })
// console.log(q2)

// slice()
//              0        1       2        3       4
let fruits = ["apple","mango","banana","orange","grapes"]
//             -5       -4      -3         -2        -1
//fruits.slice(startIndex,endIndex(not included)) // array

let q1 = fruits.slice(1)
let q2 = fruits.slice(-3)
console.log(q1)
console.log(q2)
console.log(fruits.slice(1,4))
console.log(fruits.slice(-4,-1))
console.log(fruits.slice(0,-1))
console.log(fruits.slice(-4,4))
console.log(fruits.slice(-1,-4))

// splice()
//               0        1       2       3
let fruitsB = ["apple","mango","banana","orange"]
// fruitsB.pop()
// fruitsB.shift()
// console.log(fruitsB)

//fruitsB.splice(startIndex,numberOfToBeDeleted)
fruitsB.splice(1,1)
console.log(fruitsB)
//                 0            1            2           3
let vegetables = ["potato","cauliflower","brinjal","cucumber"]
vegetables.splice(2,1,"cabbage")
console.log(vegetables)
// sort()

let names = ["chinmay","ram","abhay","binay","emdo"]
names.sort()
console.log(names)

// reverse()
let surnames  = ["deshpande","dani","deshmukh","dande"]
surnames.reverse()
console.log(surnames)

// join() 
let info = ["chinmay","deshapnde",7709192441]
let q3 = info.join('@') // "chinmay-deshpande-7709192441"
console.log(q3)

// concat()
let marks  = [11,22,33]
let marksB = [44,55,66]
let marksC = marksB.concat(marks)
console.log(marksC)


//at() 

//flat()

//fill()

