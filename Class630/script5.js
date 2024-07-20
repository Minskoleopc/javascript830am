let firstName = "chinmay"
console.log(firstName)
console.log(typeof firstName)

// 3 ways to define string 


let firstN = 'chinmay'
let lastName = "deshpande"
let middleName = `shirish`

console.log(firstN)
console.log(lastName)
console.log(middleName)

// program 3

// number + number  ======> number 
// string + number  ======> string 
// number + string  ======> string 
// string + string  ======> string

let a = 10 
let b = 20 
let c =  "hello"

console.log(a+b+c)
// number + number + string
  //     number   + string 
                // string

console.log(c+b+a)
// string + number + number 
        // string + number  // 'hello20" + 10
                // string    // hello2010

console.log(a + c + b)
// number + string + number
        // string + number 
            // string
// 10hello20


// program 4
// string contact
let firstNamee = "chinmay"
let lastNamee = "deshpande"
// My firstName is chinmay and lastName is deshpande

console.log("My firstName is "+firstNamee+" and lastName is "+lastNamee)
console.log(`My firstName is ${firstNamee} and lastName is ${lastNamee}`)


// program 5
// does string stores the value by index ??

let city = "pune"
console.log(city[0])

city[0] = "n"
console.log(city)

let city2 = "nagpur"

// 0   1   2  3  4  5
// N   a   g  p  u  r
//-6  -5  -4 -3 -2 -1

// for loop 
for(let i = 0 ; i < city2.length ; i++){
    //console.log(i)
    console.log(city2[i])
}

// while 
let i2  = 0 
while(i2 < city2.length){
    //console.log(i2)
    console.log(city2[i2])
    i2 = i2 + 1
}

// for reverse 
city2 = "nagpur"

for(let i = city2.length - 1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(city2[i])
}
// while reverse

let i3 = city2.length-1
while(i3 >= 0){
    console.log(city2[i3])
    i3 = i3 -1
}


// program 6
// String ---- Object ------ properties and method

// toUpperCase()
let city4 = "nagpur"
let q2 = city4.toUpperCase()
console.log(q2)

// toLowerCase()
city4 = "Nagpur"
let q3 = city4.toLowerCase()
console.log(q3)


// includes()

let city5 = "bhopal"
let q4 = city5.includes("bho")
let q5 = city5.includes("o")
let q6 = city5.includes("O")
console.log(q4)
console.log(q5)
console.log(q6)

// indexOf()

let city6 = "wardha"
// 0    1    2    3     4     5
// W    a    r    d     h     a

let q7 = city6.indexOf("r")
let q8 = city6.indexOf("R")
let q9 = city6.lastIndexOf("a")
console.log(q7)
console.log(q8)
console.log(q9)

// slice()

let city7  = "chandrapur"

//  0     1     2   3    4    5     6    7    8     9
//  c     h     a   n    d    r     a    p    u     r
// -10   -9    -8  -7   -6   -5    -4   -3   -2    -1
//city7.slice(startIndex,endIndex(notIncluded))
console.log(city7.slice(3))
console.log(city7.slice(3,8))
console.log(city7.slice(-4))
console.log(city7.slice(-9,-4))
console.log(city7.slice(-9,4))
console.log(city7.slice(1,-4))
console.log(city7.slice(-1,-4))

// spilit()

let info = ["chinmay","shirish","deshpande",7709192441]
let q11 = info.join("-")
console.log(q11)
let q12 = q11.split('-')
console.log(q12)

//["chinmay","shirish","deshpande","7709192441"]

let city12 = "chandrapur"
let q13 = city12.split("a")
// ["ch","ndr","pur"]
console.log(q13)

// replace()

let infoE  = "I am learning javascript"
let q14 = infoE.replace("javascript","python")
console.log(q14)

// startswith()

let city13 = "jaipur"
console.log(city13.startsWith('ja'))
console.log(city13.startsWith('j'))
console.log(city13.startsWith('J'))

// endswith()
console.log(city13.endsWith("r"))
console.log(city13.endsWith("pur"))
console.log(city13.endsWith("Pur"))

// trim()

let city14 = " goa "
// console.log(city14.length)
// let t1 = city14.trim()
// console.log(t1.length)

// trimStart()
// let t2 = city14.trimStart()
// console.log(t2.length)

// trimEnd()
let t3 = city14.trimEnd()
console.log(t3.length)
// charAt()

let city10 = "mumbai"
// 0  1 2  3  4  5
// m  u m  b  a  i
console.log(city10.charAt(1))

// charCodeAt()

let qq = city10.charCodeAt(2)
console.log(qq)





















