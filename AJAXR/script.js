// asyn vs sync 

// function additionA(){
//     console.log('A')
// }

// function additionB(){
//     console.log('B')
// }

// additionB()
// additionA()

// function additionC(){
//     setTimeout(function(){
//         console.log("C")
//     },2000)
// }
// function additionD(){
//     console.log("D")
// }

// additionC()
// additionD()

// program 3 
// async  ------- sync

// function getInfo() {
//     setTimeout(function () {
//         console.log('user created')
//     }, 3000)

//     setTimeout(function () {
//         console.log("get id")
//     }, 2000)

//     setTimeout(function () {
//         console.log("get info")
//     }, 1000)
// }
//getInfo()

// function getInfo() {
//     setTimeout(function () {
//         console.log('user created')
//         setTimeout(function () {
//             console.log("get id")
//             setTimeout(function () {
//                 console.log("get info")
//             }, 1000)
//         }, 2000)

//     }, 3000)
// }
// getInfo()

// promises

// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 10
//     if( a == b){
//         resolve("hello")
//     }
//     else {
//         reject('bye')
//     }
// })

// program1 

// pro
// .then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// program 3
// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// program 4
// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute")
// })


// program 5

// pro
// .then(function(str){
//     console.log(str)
//     return "hello"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute")
// })


// function createUser(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('user created')
//         },3000)
//     })
// }

// function getId(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('get id')
//         },2000)
//     })
// }

// function getInfo(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('get info')
//         },1000)
//     })
// }


// createUser()
// .then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str){
//     console.log(str)
//     return getInfo()
// })
// .then(function(str){
//     console.log(str)
// })

// async  function getUsers(){
//     let  q1 = await createUser()
//     console.log(q1)
//     let q2 = await getId()
//     console.log(q2)
//     let q3 = await getInfo()
//     console.log(q3)
// }
// getUsers()

// let students = {
//     "page": 2,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//         },
//         {
//             "id": 9,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//         },
//         {
//             "id": 10,
//             "email": "byron.fields@reqres.in",
//             "first_name": "Byron",
//             "last_name": "Fields",
//             "avatar": "https://reqres.in/img/faces/10-image.jpg"
//         },
//         {
//             "id": 11,
//             "email": "george.edwards@reqres.in",
//             "first_name": "George",
//             "last_name": "Edwards",
//             "avatar": "https://reqres.in/img/faces/11-image.jpg"
//         },
//         {
//             "id": 12,
//             "email": "rachel.howell@reqres.in",
//             "first_name": "Rachel",
//             "last_name": "Howell",
//             "avatar": "https://reqres.in/img/faces/12-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }



// students.data.forEach(function(el){
//     document.write(`<h1>${el.first_name} ${el.last_name}</h1>`)
//     document.write(`<p> ${el.email}</p>`)
//     document.write(`<img src=${el.avatar}>`)
// })



// function getUserPagesWise(page) {
//     fetch(`https://reqres.in/api/users?page=${page}`)
//         .then(function (response) {
//             console.log(response)
//             return response.json()
//         })
//         .then(function (response) {
//             console.log(response)
//             response.data.forEach(el => {
//                 document.write(`<h1>${el.first_name} ${el.last_name}</h1>`)
//                 document.write(`<p> ${el.email}</p>`)
//                 document.write(`<img src=${el.avatar}>`)

//             });
//         })
// }
// getUserPagesWise(1)

function getUsersPageWise(page) {
    return fetch(`https://reqres.in/api/users?page=${page}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response.data[0].id
        })
}

function getSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response.data
        })
}

function renderHtml(el) {
    document.write(`<h1>${el.first_name} ${el.last_name}</h1>`)
    document.write(`<p> ${el.email}</p>`)
    document.write(`<img src=${el.avatar}>`)
}

// getUsersPageWise(1)
// .then(function(id){
//     return getSingleUser(id)
// })
// .then(function(el){
//     renderHtml(el)
// })

async function getSingleUsers(page){
    let id = await getUsersPageWise(page)
    console.log(id)
    let el = await getSingleUser(id)
    renderHtml(el)
}
getSingleUsers(1)