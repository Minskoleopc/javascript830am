let inputT = document.querySelector('input')
let headT = document.querySelector('h1')
let buttonT = document.querySelector('button')

console.log(inputT)
console.log(headT)
console.log(buttonT)

buttonT.addEventListener('click',function(){
    let colorText = inputT.value
    headT.style.color = colorText
    inputT.value = ""
})