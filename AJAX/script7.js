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
//     document.write(`<h1>${el.first_name}${el.last_name}<h1>`)
//     document.write(`<h2>${el.id}<h2>`)
//     document.write(`<p>${el.email}<p>`)
//     document.write(`<img src= ${el.avatar}>`)
// })

// program 2

// function getUsers(page) {
//     fetch(`https://reqres.in/api/users?page=${page}`)
//         .then(function (response) {
//             console.log(response)
//             return response.json()
//         })
//         .then(function (response) {
//             console.log(response)
//             console.log(response.data)
//             response.data.forEach(function (el) {
//                 document.write(`<h1>${el.first_name}${el.last_name}<h1>`)
//                 document.write(`<h2>${el.id}<h2>`)
//                 document.write(`<p>${el.email}<p>`)
//                 document.write(`<img src= ${el.avatar}>`)
//             })
//         })
// }
// getUsers(2)


function getUserId(page){
    return fetch(`https://reqres.in/api/users?page=${page}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response.data[0].id)
        return response.data[0].id
        
    })
}
//getUserId(2)

function getSingleUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response)
        return response.data
    })

}
//getSingleUser(7)
function renderHtml(el){
    document.write(`<h1>${el.first_name}${el.last_name}</h1>`)
    document.write(`<h2>${el.id}</h2>`)
    document.write(`<p>${el.email}</p>`)
    document.write(`<img src= ${el.avatar}>`)
}

getUserId(1)
.then(function(id){
    return getSingleUser(id)
})
.then(function(el){
    renderHtml(el)
})





