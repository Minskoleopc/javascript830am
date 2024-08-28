// let  const and var


// scope and assignment
// let a  = 10
// a  = 400
// console.log(a)

// var n = 100
// n = 100
// console.log(n)


// const g = 10
// //g = 900
// //console.log(g)


// let and const are blocked scope

// let a = 10 
// const pi = 100

// {
//     let a = 100
//     console.log(a) // 100
// }

// console.log(a) // 10

// {
//     const d = 1000
//     console.log(d)
// }
// console.log(d)

// var is function 

// var a = 100000
// console.log(a)

// function addition(){
//     var a = 1000
//     console.log(a) // 1000

//     {
//         let a = 10000
//         console.log(a) // 10000
//     }

// }
// addition()
// console.log(a) // 100000


// var a = 1000
// console.log(a)  // 1000
// function addition(){
//     a = 1000
//     console.log(a)   // 1000

//     {
//         let a = 1
//         console.log(a)   //1
//     }
//     a = 1
//     console.log(a) // 1
// }
// addition()
// console.log(a)  // 1