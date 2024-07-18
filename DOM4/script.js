//<h2 id = "two" class = "three" name = "four">Learning</h2>

// selecting the element
let byTagName = document.querySelector('h2')
console.log(byTagName)

let byClassName = document.querySelector('.three')
console.log(byClassName)

let byId = document.querySelector('#two')
console.log(byId)

// tagName[att='val']
let byAttr  =  document.querySelector(h2['name ="four"'])
console.log(byAttr)