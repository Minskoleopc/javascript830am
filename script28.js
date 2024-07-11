
let firstName = "Chinmay"
let q1 = firstName.toUpperCase()
console.log(q1)


let q2 = firstName.toLowerCase()
console.log(q2)

// program 2

// startswith()
// endswith()

let lastName = "deshpande"
let q3 = lastName.startsWith("de")
let q4 = lastName.startsWith("D")
let q5 = lastName.startsWith("d")
console.log(q3)
console.log(q4)
console.log(q5)

// program 3

let lastNamee = "Dani"
let q6 = lastNamee.endsWith("i")
let q7 = lastNamee.endsWith("ni")
let q8 = lastNamee.endsWith("Ni")

console.log(q6)
console.log(q7)
console.log(q8)

// program 4
let info2 = "i am learning js"
let q9 = info2.replace('js',"python")
console.log(q9)


//program 6

let cit1 = "wardha"
// 0    1   2   3   4   5 
// w    a   r   d   h   a
let q10 = cit1.indexOf('a')
let q11 = cit1.indexOf('A')
let q12 = cit1.lastIndexOf('a')

console.log(q10)
console.log(q11)
console.log(q12)

let q13 = cit1.charAt(2)
console.log(q13)

// program 7
// trim()

let city2 = " nagpur "
let q14 = city2.trim()
console.log(q14)
console.log(q14.length)

// trimStart()
city2 = " nagpur "
let q15 = city2.trimStart()
console.log(q15.length)

// trimEnd()
city2 = "  nagpur "
console.log(city2.length)
let q16 = city2.trimEnd()
console.log(q16.length)

// includes()
let fruits  = "apple mango banana grapes orange papaya"
let q17 = fruits.includes('Grapes')
console.log(q17)


// concat()
let fn = "chinmay"
let q18 = "The one who is learning js is ".concat(fn)
console.log(q18)

// splice()
let city4 = "chandrapur"
//city4.slice(startIndex,endIndex)

// 0      1       2      3      4     5    6     7      8     9
// c      h       a      n      d     r    a     p      u      r
//-10     -9     -8     -7     -6    -5   -4    -3     -2     -1

console.log(city4.slice(3))
console.log(city4.slice(3,8))
console.log(city4.slice(3,-4))
console.log(city4.slice(-9,7))
console.log(city4.slice(-9))
console.log(city4.slice(-9))
console.log(city4.slice(-1,-4))