

function getSingleUserInfo(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            console.log("something went wrong....")
        })
}

// function userTimeOut(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('time out ...')
//         },3)
//     })
// }

function userTimeOut() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('time out ...')
        }, 3)
    })
}




// async function getPromiseAny() {
//     let students = await Promise.any(
//         [getSingleUserInfo(1), getSingleUserInfo(2), userTimeOut()]
//     )
//     console.log(students)
// }
// getPromiseAny()


// async function getPromiseAllSettled() {

//     let students = await Promise.allSettled(
//         [getSingleUserInfo(1), getSingleUserInfo(2), userTimeOut()]
//     )
//     students.forEach(el => {
//         if (el.status === 'fulfilled') {
//             console.log(el.value)
//         }
//         else if (el.status === 'rejected') {
//             console.log(el.reason)
//         }
//     });
// }
// getPromiseAllSettled()



// async function getPromiseRace(){
//     try {
//         let students = await Promise.race(
//             [getSingleUserInfo(1),getSingleUserInfo(2)]
//         )
//         console.log(students)
//     }
//     catch{
//         console.log("error.......")
//     }
// }
// getPromiseRace()



// async function getPromiseAll(){
//     try {
//         let students = await Promise.all(
//             [getSingleUserInfo(1)
//             ,getSingleUserInfo(2)
//             ,getSingleUserInfo(3)
//         ]
//         )
//         console.log(students)
//     }
//     catch{
//         console.log("error.......")
//     }
// }
// getPromiseAll()


// program 4
// Promise.any()
// Promise.any([
//     userTimeOut(),
//     getSingleUserInfo(1),
//     getSingleUserInfo(2)
// ])
// .then(function(response){
//     console.log(response)
// })

// Promise.allSettled([
//     getSingleUserInfo(1),
//     getSingleUserInfo(2),
//     userTimeOut()
// ])
// .then(function(response){
//     console.log(response)
//     response.forEach(function(el){
//         if(el.status === 'fulfilled'){
//             console.log(el.value)
//         }
//         else if(el.status === 'rejected'){
//             console.log(el.reason)
//         }

//     })
// })






// Promise 2

// Promise
// .race([getSingleUserInfo(2),userTimeOut()])
// .then(function(response){
//     console.log(response)
// })
// .catch(function(){
//     console.log("error.......")
// })


// program 1
// Promise.all(
//     [
//         getSingleUserInfo(1),
//         getSingleUserInfo(2),
//         getSingleUserInfo(3)

//     ]
// )
// .then(function(res){
//     console.log(res)
// })
// .catch(function(){
//     console.log("error")
// })

// React --
// Es6 new concepts 
// Monday --- typescript  - cypress / playwright
// React 