// // f1 - 3
// // f2 - 4
// // f3 - 5
// //f1 f2 f3
// // program 2

// let proOne = new Promise(function(resolve,reject){
//     setTimeout(() => {
//             resolve('user one created')
//     }, 1000);
// })

// let protwo = new Promise(function(resolve,reject){
//     setTimeout(() => {
//             resolve('user two created')
//     }, 2000);
// })

// let prothree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//             resolve('user three created')
//     }, 3000);
// })

// let profour = new Promise(function(resolve,reject){
//     setTimeout(() => {
//             reject('user four created')
//     }, 3000);
// })

// promise combinators --- parallel exection
// Promise.all()

// Promise.all([proOne,profour,protwo,prothree])
// .then(function(arr){
//     console.log(arr)
// })
// .catch(function(err){
//     console.log(err)
// })

// Promise.allSettle()

// proOne = new Promise(function(resolve,reject){
//     setTimeout(() => {
//             resolve('user one created')
//     }, 1000);
// })

// protwo = new Promise(function(resolve,reject){
//     setTimeout(() => {
//             resolve('user two created')
//     }, 2000);
// })

// prothree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//             resolve('user three created')
//     }, 3000);
// })

// profour = new Promise(function(resolve,reject){
//     setTimeout(() => {
//             reject('user four created')
//     }, 3000);
// })

// Promise.allSettled([proOne,protwo,prothree,profour])
// .then(function(arr){
//     console.log(arr)
// })

// Promise.race()
proOne = new Promise(function(resolve,reject){
    setTimeout(() => {
            resolve('user one created')
    },2000);
})
protwo = new Promise(function(resolve,reject){
    setTimeout(() => {
            resolve('user two created')
    }, 2000);
})
prothree = new Promise(function(resolve,reject){
    setTimeout(() => {
            resolve('user three created')
    }, 3000);
})
profour = new Promise(function(resolve,reject){
    setTimeout(() => {
            reject('user four created')
    }, 1000);
})


Promise.race([proOne,protwo,prothree,profour])
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})


// Promise.any

proOne = new Promise(function(resolve,reject){
    setTimeout(() => {
            resolve('user one created')
    },3000);
})
protwo = new Promise(function(resolve,reject){
    setTimeout(() => {
            resolve('user two created')
    }, 4000);
})
prothree = new Promise(function(resolve,reject){
    setTimeout(() => {
            resolve('user three created')
    }, 2000);
})
profour = new Promise(function(resolve,reject){
    setTimeout(() => {
            reject('user four created')
    }, 2000);
})

Promise.any([proOne,protwo,prothree,profour])
.then(function(str){
    console.log(str)
})


// promise.all([])
// Promise.allSettle([])
// Promise.race([])
// Promise.any([])


// Async await 

// API 










