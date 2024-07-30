{/* <h1 id = "one" class = "two" name = "nm">HeadingOne</h1>
    <ul>
        <li class = "fr" name = "nm">Apple</li>
        <li class = "fr" name = "nm">Mango</li>
        <li class = "fr" name = "nm">Banana</li>
    </ul> */}

// css selector
let idName = document.querySelector('#one')
console.log(idName)


let idName2 = document.getElementById('one')
console.log(idName2)

// className 

let byClassName = document.querySelectorAll('.fr')
console.log(byClassName)  // nodeList

let byClassNameB = document.getElementsByClassName('fr')
console.log(byClassNameB) // htmlcollection

// bytagName 

let allElements = document.querySelectorAll('li')
console.log(allElements) // nodeList

let allElementsB = document.getElementsByTagName('li')
console.log(allElementsB) // html collections

// name
let byNames = document.querySelectorAll('[name = "nm"]')
console.log(byNames)

let byNamesB = document.getElementsByName('nm')
console.log(byNamesB)

//<h2 id = "one" class = "two" name = "nm">Heading</h2>

let ele  = document.getElementById('one')
console.log(ele.className)

ele.classList.add('three')
console.log(ele.className)

ele.classList.remove('two')
console.log(ele.className)

// toggle 
ele.classList.toggle('three')
ele.classList.toggle('three')
console.log(ele.className)
