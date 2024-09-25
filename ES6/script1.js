// // rest operator
// function addAll(...arr){
//     console.log(arr)
//     return arr.reduce(function(acc,el){
//         return el + acc
//     },0)

// }
// let q = addAll(1,2,3,4,5,6,7,3,4,5,6,7,8,9,5)
// console.log(q)

// //1,2,3,4,5,6,7,3,4,5,6,7,8,9,5 ====> [1,2,3,4,5,6,7,3,4,5,6,7,8,9,5]

// // program 2 
// // spread operator
// //[11,22,33,44,55,66,77,88]  =======> 11,22,33,44,55,66,77,88

// let numbers = [11,22,33,44,55,66,77,88,99,100]
// function addFirstFive(a,b,c,d,e){
//     console.log(a+b+c+d+e)
// }
// //addFirstFive(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4])
// addFirstFive(...numbers)

// // program 3

// let numbersB = [11,22,33,44,55]
// //[...numbers] ====> 11,22,33,44,55
// console.log(numbersB)

// function addFirstThree(a,b,c,...d){
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
// }
// addFirstThree(...numbersB) // 11,22,33,44,55

// // program 4

// let n = [11,22,33]
// // let m = n 
// // n[0]  = 111
// // print(m) // [111,22,33]
// // print(n) // [111,22,33]

// let m2 = [...n] // copy ---- separate memory
// m2[0] = 1111
// console.log(m2)
// console.log(n)


const  person = {
    name:"John",
    lastName:"Deer"

}
let info = {
    city:"pune"
}
let infoUpadte = {...person,...info}

let arrayA = [11,22,33]
let arrayB = [34,44,55]
let arrayC = [...arrayA,...arrayB]
console.log(arrayC)


// program 2 rest

let infoC = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:23
}

let {firstName,...otherinfo} = infoC
console.log(firstName)
console.log(otherinfo)

let names  = ['chinmay',"shirish","sharddha","rohit"]
let [a,...b] = names
console.log(a)
console.log(b)


// program 3
// rest and spread operator with object using function

let infoW = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:2123,
    city:"pune"
}

function displayFullName({firstName,lastName,...info}){
    console.log(firstName)
    console.log(lastName)
    console.log(info)
}
displayFullName(infoW)

// take away --------> 
//copy - array or copy -----> separate memory


// program 7
// short circuiting in js 


// && 
// falsy values => null , undefined , "", 0 , 23 > 3 ,NaN

let isLoggedIn = false
let user = {name:"john"}
let val = isLoggedIn && user.name
console.log(val)



let isLoggedIn2 = true
let user2 = {name:"john"}
let val2 = 2 > 3 && 0
let val3 = null && 0
let val4 = undefined && 0
let val5 = '' && "bye"
console.log(val2)
console.log(val3)
console.log(val4)
console.log(val5)

// if(NaN){
//     console.log("hello")
// }
// else {
//     console.log('bye')
// }

// OR 




















