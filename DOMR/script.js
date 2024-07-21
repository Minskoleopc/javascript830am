//<p id = "one" class = 'two' name = "three"></p>
// Object 
// Properties and method

let byTagName  = document.querySelector('p')
let byClassName  = document.querySelector('.two')
let byId  = document.querySelector('#one')
let byAttr = document.querySelector('p[name="three"]')

console.log(byTagName)
console.log(byClassName)
console.log(byId)
console.log(byAttr)

byAttr.addEventListener('click',function(){
    byAttr.textContent = "Vegetable"
})


// let info = {
//     firstName:'chinmay',
//     lastName:'deshpande'
// }

// info.firstName = "tanmay"

