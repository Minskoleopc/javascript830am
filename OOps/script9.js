function addition(){
    let a = 10 
    let b = 20
    console.log(a+b)

    function addition2(){
        let c = 100
        let d = 200
        console.log(a+b+c+d)
        //console.log(a1)
        function addition3(){
            let a1 = 10
            console.log(a+b+c+d+a1)
        }
        addition3
    }
    addition2()
}
addition()


// // lift up state 
// // derived state

// closures

// function Cal(){
//     console.log("hello")
//     let a = 10
//     let b = 30
//     return  a + b
//     console.log(a+b)
// }
// Cal(23,4)


// function CalculateDiscount(numT){
    
//     if(numT > 0 && numT <=5){
//         return "10 % discount"
//     }

//     else if(numT > 5 && numT <= 10){
//         return "10 % discount"
//     }
//     else if(numT > 10){
//         return "15 % discount"
//     }

// }
// CalculateDiscount(5)

// function Calc(){
//     let a = 10
//     let b = 5

//     return function(){
//         console.log(a+b)
//     }
// }
// let q = Calc()
// q()
// console.log(a)

// let q  = function(){
//     console.log(a+b)
// }

// let and const and var 

// assigment
// let a = 10
// console.log(a)
// a = 100
// console.log(a)

// var h  = 8 
// h = 50
// console.log(h)

// const j = 33
// console.log(j)
// j = 888


// scope 

// let and const are blocked scope

let a = 10
{
    let a = 100
    console.log(a) // 100
}
console.log(a) // 10

// program 3
let b = 399
{
    b = 900
    console.log(b)// 900
}
console.log(b) // 900

let n = 1000
{
    let n = 99
    console.log(n) // 99
    n = 9000
    console.log(n) // 9000
}
console.log(n) // 1000
n = 888
console.log(n) // 888


// const are blocked scope
// program 3

// const h = 100
// {
//     h = 999
//     console.log(h) // 999
// }
// console.log(h) // 999

// program 4
const h = 100
{
    const h = 999
    console.log(h)  // 999
}
console.log(h)  // 100




