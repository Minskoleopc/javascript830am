//<h2 id = "one" class = "three" name = "four">Minskole</h2>

// selecting the element -- css selector

let bytagName = document.querySelector('h2')
console.log(bytagName)

let byId = document.querySelector('#one')
console.log(byId)

let byClass = document.querySelector('.three')
console.log(byClass)

// tagName[att = "value"]
let byAttr = document.querySelector('h2[name= "four"]')
console.log(byAttr)