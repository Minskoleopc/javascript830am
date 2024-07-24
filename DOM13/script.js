
let inputT = document.querySelector('input')
let buttonT  = document.querySelector('button')
let ulList = document.querySelector('ul')

console.log(inputT)
console.log(buttonT)
console.log(ulList)

buttonT.addEventListener('click',function(){
    let fruitText = inputT.value // "papaya"
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = fruitText // <li>papaya</li>
    ulList.appendChild(newLi)
    inputT.value = ""
})