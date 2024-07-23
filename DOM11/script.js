let inputT = document.querySelector('input')
let buttonT = document.querySelector('button')
let headT = document.querySelector('h1')

buttonT.addEventListener('click',function(){
    let colorText = inputT.value
    headT.style.color = colorText
    inputT.value = ""
})