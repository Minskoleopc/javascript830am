// Promise combinators 

// Promise combinators // parallel execution of promises
// Promise.all([])
// Promise.allSettled([])
// Promise.race([])
// Promise.any([])



// let proOne = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve('user created successfully...1')
//     }, 3000);
// })



// let proTwo = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve('user created successfully...2')
//     }, 2000);
// })

// let proThree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve('user created successfully...3')
//     }, 2000);
// })

// let  = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         reject('user created successfully...4')
//     }, 1000);
// })

// program one ...
// async function PromiseAll(){
//     try{
//         let pro = await Promise.all([proOne,proTwo,proThree,proFour])
//         console.log(pro)
//     }
//     catch{
//         console.log('error caught')
//     }
// }
// PromiseAll()

// program 2


// proOne = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve('user created successfully...1')
//     }, 3000);
// })

// proTwo = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve('user created successfully...2')
//     }, 2000);
// })

// proThree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve('user created successfully...3')
//     }, 2000);
// })

// proFour = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         reject('user created successfully...4')
//     }, 1000);
// })

// async function PromiseAllSettled(){
//     let arr = await  Promise.allSettled([proOne,proTwo,proThree,proFour])
//     console.log(arr)
// }

// PromiseAllSettled()


// program 3


proOne = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('user created successfully...1')
    }, 3000);
})

proTwo = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('user created successfully...2')
    }, 2000);
})

proThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('user created successfully...3')
    }, 2000);
})

// proFour = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         reject('user created successfully...4')
//     }, 1000);
// })


// async function PromiseRace(){
//     try {
//         let raceWinner = await Promise.race([proOne,proTwo])
//         console.log(raceWinner)
//     }
//     catch{
//         console.log("error caught..")
//     }
// }
// PromiseRace()


// program 4

proOne = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('user created successfully...1')
    }, 2000);
})

proTwo = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('user created successfully...2')
    }, 1000);
})

proThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('user created successfully...3')
    }, 4000);
})

proFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        reject('user created successfully...4')
    }, 1000);
})


async function PromiseAny(){
    let val = await Promise.any([proOne,proTwo,proThree,proFour])
    console.log(val)
}
PromiseAny()