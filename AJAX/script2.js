// // async vs sync

// function  additionA(){
//     console.log("addition A")
// }

// function additionB(){
//     console.log("addition B")
// }

// additionA()
// additionB()

// function additionD(){
//     setTimeout(function(){
//         console.log("addition D")
//     },3000)
// }

// function additionE(){
//     console.log("addition E")
// }
// additionD()
// additionE()

// program 3


function getInfo(){

    setTimeout(function(){
        console.log("create user")
    },3000)

    setTimeout(function(){
        console.log("create id")
    },2000)

    
    setTimeout(function(){
        console.log("get info")
    },1000)
}
//getInfo()

// async sync 
// async ----- sync ---- create user  ---- create id ---- get info

// program 4
// call back hell

// function getInfo(){
//     setTimeout(function(){
//         console.log("create user"),
//         setTimeout(function(){
//             console.log("create id"),
//             setTimeout(function(){
//                 console.log("get info")
//             },1000)
//         },2000)
//     },3000)
// }
// getInfo()

// not reusable and tightly coupled


let pro1 = new Promise(function(resolve,reject){
    let a = 10
    let b = 10
    if(a == b){
        resolve("hello")
    }
    else {
        reject("bye")
    }
})

// consume
// pro1.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// program 2


let pro2 = new Promise(function(resolve,reject){
    let firstName = "chinmay"
    if(firstName.length >= 7){
        resolve([11,22,33])
    }
    else {
        reject([-11,-22,-33])
    }
})

pro2
.then(function(a){
    console.log(a[0])
},function(b){
    console.log(b[1])
})


// program 3


// let pro3 = new Promise(function(resolve,reject){
//     let a = 10 
//     let b = 100
//     if(a == b){
//         resolve("hello")
//     }
//     else {
//         reject('bye')
//     }
// })
// pro3
// .then(function(str){
//     console.log(str) // "hello"
// })
// .catch(function(str){
//     console.log(str) // "bye"
// }) 


// function addition(){

//     if(a == 100){
//         return 100
//     }
//     else if(a < 100){
//         return "less than 100"
//     }
//     else {
//         return 100
//     }


// }




let pro4 = new Promise(function(resolve,reject){
    let a = 10 
    let b = 1
    if(a == b){
        resolve("hello")
    }
    else {
        reject('bye')
    }
})
pro4
.then(function(str){
    console.log(str) 
})
.catch(function(str){
    console.log(str) 
}) 
.finally(function(){
    console.log("i will always execute")
})
    




















