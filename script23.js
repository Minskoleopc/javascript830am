// program 1

// join()

let info  = ["chinmay","deshpande",7709192441]
let a = info.join('-')
console.log(a)

let b = info.join('@')
console.log(b)

// concat()
let n1 = [11,22,33]
let n2 = [33,44,55]
let c = n1.concat(n2)
console.log(c)

//slice()
//slice(startIndex, endIndex(not included))
//              0         1       2      3      4         5
let names = ["chinmay","shirish","ram","sham","vaibhav","sumit"]
//             -6        -5       -4     -3     -2         -1
e = names.slice(2)
console.log(e)
console.log(names.slice(1,5))
console.log(names.slice(1,4))
console.log(names.slice(-5))
console.log(names.slice(-5,-1))
console.log(names.slice(-5,4))
console.log(names.slice(-1,-5))

// splice()
//                0           1         2         3
let countries = ["india","pakistan","srilanka","bangladesh"]
//countries.pop()
//countries.shift()
//arrayName.splice(startIndex,numberOfElementsTobeDeleted,repl,repl)
// countries.splice(3,1)
// console.log(countries)
countries.splice(1,2,"china","cuba")
console.log(countries)

// flat()
//                    0                    1                    2
//               0        1          0          1         0          1
let state  = [["Nagpur","Mumbai"],["Kanpur","Lucknow"],["Jaipur","Udaipur"]]
console.log(state[0])
console.log(state[1][1])
console.log(state[2][1])
let f = state.flat()
console.log(f)

// indexof // at
//             0   1  2  3
let numbers = [11,22,33,44]
console.log(numbers.at(2)) // pass the index
console.log(numbers.indexOf(33))
console.log(numbers.indexOf(54))

// reverse()
let country = ["india","srilanka","bangladesh","china"]
console.log(country.reverse())

// sort()
countries.sort()
console.log(countries)

// fill()
//fill("filledValue",startIndex,endIndex(not included))
//              0   1 2  3  4  5  6  7
let numbersN = [11,22,33,44,55,66,77,88]
let h = numbersN.fill(undefined,1,5)
console.log(h)