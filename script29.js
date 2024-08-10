// Destructing of objects and array
//              0        1      2      3
let names = ["chinmay","amol","raj","satish"]
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])

let e1 = names[0]
let e2 = names[1]
let e3 = names[2]
let e4 = names[3]

console.log(e4)

// program 1
names = ["chinmay","amol","raj","satish"]
let [a1,a2,a3,a4] = names
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)

// program 2
//              0        1        2      3
let fruits = ["apple","mango","banana","grapes"]
let [f1,f2,f3,f4] = fruits
console.log(f1)
console.log(f2)
console.log(f3)
console.log(f4)

//program 3
//                    0                    1                    2
//               0         1          0        1          0          1
let states = [["Nagpur","Wardha"],["Jaipur","Udaipur"],["Kanpur","Lucknow"]]
console.log(states[0][1])
console.log(states[1][1])
console.log(states[2][0])

let [[a11,a22],[a33,a44],[a55,a66]] = states
console.log(a55)
console.log(a22)


// program 4

let info = {
    firstName:"chinmay",
    lastName:"deshpande"
}

// let {firstName,lastName} = info
// console.log(firstName)
// console.log(lastName)

let {firstName:fn,lastName:ln} = info
console.log(fn)
console.log(ln)
























