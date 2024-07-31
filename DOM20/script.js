{/* <h1>Fruits</h1>
<p class = "one">Learning updates</p> */}

// javascript element create
// javascript element update 
// javascript element - retrive
// javascript element delete

// javascript attribute create
// javascript attribute update 
// javascript attribute delete 
// javascript attribute value retrive 



// attribute

let para = document.querySelector('p')
console.log(para.className)
para.classList.add("two")
console.log(para)

para.classList.remove("one")
console.log(para)

para.classList.toggle("two")
para.classList.toggle("one")
console.log(para)

let idE2 = document.querySelector('#nk')
console.log(idE2)
// retrive the value of attribute
let idV = idE2.getAttribute('id')
let idC = idE2.getAttribute('class')
let idN = idE2.getAttribute('name')

//<h2 id = "nk"  class = "three" name = "nm">headingTwo</h2>
console.log(idV)
console.log(idC)
console.log(idN)

// update
idE2.setAttribute('id',"mk")
console.log(idE2)


// add
idE2.setAttribute('cy',"data")
console.log(idE2)


//remove
idE2.removeAttribute("id")
console.log(idE2)

