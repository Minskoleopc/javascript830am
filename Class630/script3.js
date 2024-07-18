// // map()
// //                 0    1   2    3
// let birthYear = [1989,1990,1991,1992]
// let ages = []
// // [35,34,33,32]'

// for(let i = 0 ; i < birthYear.length ; i++){
//     //console.log(i)
//     //console.log(birthYear[i])
//     //console.log(2024 - birthYear[i])
//     let ag = 2024 - birthYear[i]
//     ages.push(ag)

// }
// console.log(ages)
// //            0     1    2    3
// birthYear = [1989,1990,1991,1992]
// let q1 = birthYear.map(function(el,index,arr){
//     //console.log(el,index,arr)
//     return 2024 - el
// })
// console.log(q1)

// // program 2
// // 
// let marks = [100,124,60,77,53]
// // [100,124,77]
// let above60 = []

// for(let i = 0 ; i < marks.length ; i++){
//     //console.log(i)
//     console.log(marks[i])
//     if(marks[i] > 60){
//         above60.push(marks[i])
//     }
// }
// console.log(above60)
// marks = [100,124,60,77,53]
// let q2 = marks.filter(function(el,index,arr){
//     return el > 60
// })
// console.log(q2)

// // program 3
// //              0  1  2
// let numbers = [11,22,33] // 66
// let total = 0

// for(let i = 0 ; i < numbers.length ; i++){
//     // console.log(i)
//     // console.log(numbers[i])

//     total = total + numbers[i]
//     //       0    +     11      ------> 11
//     //       11   +     22      ------> 33
//     //       33   +     33      ------> 66

// }
// console.log(total)
// numbers = [11,22,33]

// let q3 = numbers.reduce(function(acc,el,index,arr){
//         return acc + el // 66
// },5)
// console.log(q3)

// // map() -- array
// // filter() -- array 
// // reduce() --- single value

// // forEach()
// //              0         1         2         3
// let cities = ["pune","banglore","kolkata","chennai"]

// for(let i = 0 ; i < cities.length ; i++){
//     //console.log(i)
//     //console.log(cities[i])
//     console.log("welcome "+ cities[i])
// }

// cities = ["pune","banglore","kolkata","chennai"]

//  cities.forEach(function(el,index,arr){
//   console.log("welcome "+ el)
// })

// map() 
//                0     1    2   3
let birthYear = [1989,1990,1991,1992]
// [35,34,33,32]
let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2024 - el
})
console.log(q1)

let numbers  = [11,22,33,44,55]
// [21,32,43,54,65]
let q2 = numbers.map(function(el){
    return el + 10
})
console.log(q2)

//filter() 

let marks = [67,50,77,34,67,88,52,69]
let q3 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q3)


let transactions = [11,22,-89,88,1000,67,999,-199]
let deposit = transactions.filter(function(el,index,arr){
    return el > 0
})
console.log(deposit)
let withdrawl = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(withdrawl)

//reduce()
let numbersB  = [11,22,33] // 66
let q4 = numbersB.reduce(function(acc,el,index,arr){
    return el + acc // 0 + 11 ===> 11 + 22 ====> 33 ===> 33 + 33 ====> 66
},0)
console.log(q4)

//forEach()

let cities = ["pune","mumbai",'bangalore',"kolkata","chennai"]
cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

// find() 
//        0   1  2  3  4  5  6 7
let n1 = [44,55,66,77,88,99,44,55] 
let q7 = n1.filter(function(el,index,arr){
    return el > 60
})
console.log(q7)

let q8 = n1.find(function(el,index,arr){
    return el > 60
})
console.log(q8)

//findIndex() 
let q9 = n1.findIndex(function(el,index,arr){
    return el > 60
})
console.log(q9)

//every()
let numbersC = [11,22,33,44]
let q10 = numbersC.every(function(el,index,arr){
    return el > 20
})
console.log(q10)
//some()
let q11 = numbersC.some(function(el,index,arr){
    return el > 20
})
console.log(q11)

// map() , filter(),reduce(),forEach()
// find(), findIndex() , some() , every()


// slice()

//               0      1      2        3         4         5       6
let cities2 = ["pune","goa","nagpur","wardha","chennai","jaipur","udaipur"]
//               -7    -6     -5       -4       -3         -2         -1
//cities2.slice(startIndex,endIndex(not included))
////cities2.slice(startIndex)
console.log(cities2.slice(1))
console.log(cities2.slice(1,5))
console.log(cities2.slice(-5))
console.log(cities2.slice(1,-3))
console.log(cities2.slice(-7,4))
console.log(cities2.slice(-1,-4))

//splice() 
//                     0        1         2        3
let vegetabales = ["carrot","brinjal","potato","cabbage"]
// vegetabales.shift()
// vegetabales.pop()

//vegetabales.splice(startIndex,numberOfElementTobeDeleted)
// vegetabales.splice(1,1)
// console.log(vegetabales)
vegetabales.splice(2,2,"cauliflower","ladyfinger")
console.log(vegetabales)

//fill() 
//            0   1  2  3 4  5  6  7  8 9
let markss = [45,43,41,40,33,12,31,29,9,8]
let q12 = markss.fill('try again',5,8)
console.log(q12)

//sort()
//          0          1       2      3     4
let nms = ["chinmay","abhisha","amit","raj","rajesh"]
nms.sort()
console.log(nms)

//flat()
//                  0                  1                      2
//              0      1          0          1          0        1
let state = [["pune","nagpur"],["jaipur","udaipur"],["kanpur","lucknow"]]

console.log(state[1][0])
console.log(state[0][1])
console.log(state[2][1])
let q13 = state.flat()
console.log(q13)













// friday - object 

// sat sun - string



// 6:15pm
// monday --- > 8:00 pm , morning 8:30am








