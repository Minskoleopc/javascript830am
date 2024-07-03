// map() , filter() , reduce(), forEach()
// find() , findIndex() , every(), some()

// program 1
//                0     1   2    3
let birthYear = [1989,1990,1991,1992]
//  [35,34,33,21]

let q1 = birthYear.map(function(el,index,arr){
    // console.log(el,index,arr)
    return 2024 - el
})
console.log(q1)

let numbers = [11,22,33,44,55]
let q2 = numbers.map(function(el,index,arr){
    return el + 10
})

console.log(q2)


// program 2
// filter()
let marks = [33,44,56,33,44,55,66,77]
let q3 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q3)

// program 3 

let transactions = [-900,1000,2000,3400,4500,-500]
let deposit = transactions.filter(function(el,index,arr){
    return el > 0
})
console.log(deposit)

let withdrawl = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(withdrawl)

// program 3
// reduce()

let numbersA = [11,22,33]
numbersA.reduce(function(acc,el,index,arr){
    return acc + el // 0 + 11 ==> 11 ===> 11 + 22 ===> 33 ===> 33 + 33 ===> 66
},0)
console.log(numbersA)

// program 4
// forEach()
let cities = ["pune","mumbai","banglore","kolkata"]
cities.forEach(function(el,index,arr){
    console.log("welcome "+el)
})

// map() , filter() , reduce(),forEach()


// find()
//              0  1  2  3  4  5 6  7 8
let marsksN = [12,88,55,66,77,12,3,45,55]
let q6 = marsksN.filter(function(el){
    return el > 50
})
console.log(q6)

// onlt first occurence
let q7 = marsksN.find(function(el){
    return el > 50
})
console.log(q7)

let q8 = marsksN.findIndex(function(el){
    return el > 50
})
console.log(q8)

// every()

let numberC = [11,22,33,44,55,6]
let q9 = numberC.every(function(el){
    return el > 10
})
console.log(q9)

// some()
let q10 = numberC.some(function(el){
    return el > 500
})
console.log(q10)







// findIndex()


// every()


//some()




















