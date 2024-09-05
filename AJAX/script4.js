// let pro2 = new Promise(function(resolve,reject){
//     let a = 10
//     let b  = 10
//     if(a == b){
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })
// pro2
// .then(function(str){
//     console.log(str)
//     return "hello2"
// })
// .then(function(str2){
//     console.log(str2)
//     return "hello2"
// })
// .then(function(str3){
//     console.log(str3)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always")
// })

// ------------------------------------------------------->
// function getInfo() {
//     setTimeout(function () {
//         console.log("user created")
//     }, 3000)
//     setTimeout(function () {
//         console.log("user id")
//     }, 2000)
//     setTimeout(function () {
//         console.log("user info")
//     }, 1000)
// }
//getInfo()

// function getInfo() {
//     setTimeout(function () {
//         console.log("user created")
//         setTimeout(function () {
//             console.log("user id")
//             setTimeout(function () {
//                 console.log("user info")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getInfo()

// program 2

function userCreate(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('create user')
        },3000)
    })
}

function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("getId")
        },2000)
    })
}

function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("getInfo")
        },1000)
    })
}

// asyn call --- sychronously
// userCreate()
// .then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str2){
//     console.log(str2)
//     return getInfo()
// })
// .then(function(str3){
//     console.log(str3)
// })


// async function getInfo2(){
//     let a = await userCreate()
//     console.log(a)
//     let b = await getId()
//     console.log(b)
//     let c = await getInfo()
//     console.log(c)
// }
// getInfo2()

// API --------------->