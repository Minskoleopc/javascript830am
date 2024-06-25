// map()

let numbers = [11,22,33,44]
// [12,23,34,45]
let q1 = numbers.map(function(el,index,arr){
   //console.log(el,index,arr)
   return el + 1
})
console.log(q1)


// filter()
let numberB = [54,11,23,44,55,66,77,88]
// [54,55,66,77,88]
let q2 = numberB.filter(function(el,index,arr){
    return el > 50
})
console.log(q2)


// reduce()

let numbersC  = [11,22,33]
let q3 = numbersC.reduce(function(acc,el,index,arr){
    return acc + el // 33
},0)
console.log(q3)

// forEach() 

let city = ["pune","nagpur","wardha"]
city.forEach(function(el,index,arr){
    console.log("welcome " + el)
})

// find()
//         0  1  2  3  4 5
let num = [33,44,55,66,33,44]
let q6 = num.filter(function(el,index,arr){
    return el > 50
})
console.log(q6) // [55,66]

let q7 = num.find(function(el,index,arr){
    return el > 50
})
console.log(q7) 

// findIndex()
let q8 = num.findIndex(function(el,index,arr){
    return el > 50
})
console.log(q8) 

// some()

let numbersN  = [33,55,66,33,44,55,10,5]
let q9  = numbersN.some(function(el,index,arr){
    return el < 5
})
console.log(q9)
// every()

let q10 = numbersN.every(function(el,index,arr){
    return el > 10
})
console.log(q10)
