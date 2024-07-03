// slice() 


// splice()


// reverse()
// let fruitsB = ["apple","mango","banana","orange","papaya"]
// fruitsB.reverse()
// console.log(fruitsB)

// sort()
// let country = ["india","pakistan","bangladesh","srilanka"]
// country.sort()
// console.log(country)

// fill()
//              0  1  2   3 4  5  6
// let marks = [97,96,95,94,93,92,91]
 //marks.fill("fill",startIndex,endIndex(not included))
 //let q7 = marks.fill("not selected",2,5)
// console.log(q7)

// flat()
//                  0                     1                   2
//             0          1          0        1         0           1
// let state = [["mumbai","nagpur"],["jaipur","udaipur"],["lucknow","kanpur"]]

// console.log(state[0][1])
// console.log(state[2][1])
// console.log(state[1][1])
// let q4  = state.flat()
// console.log(q4)

// at()  indexOf()
//              0        1       2        3
// let cities = ["pune","nagpur","mumbai","kolkata"]
// let c1 = cities.indexOf('nagpur')
// console.log(c1)

// let c3 = cities.at(1)
// console.log(c3)

//concat()
// let fruitsOne = ["apple","banana","grapes"]
// let fruitsTwo = ["papaya","chikoo","jamun"]
// let q2 = fruitsOne.concat(fruitsTwo)
// console.log(q2)

// // join()
// //             0           1          2
// let info = ["chinmay","deshpande",7709192441]
// // "chinmay-deshpande-7709192441"
// let q3 = info.join(' ')
// console.log(typeof q3)
// console.log(q3)
//       0   1  2  3 4
let h = [11,22,33,44,55]
let q22 = h.at(3)
console.log(q22)

let q23 = h.indexOf(55)
console.log(q23)