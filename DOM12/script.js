let inputT = document.querySelector('input')
let ulList = document.querySelector('ul')
let buttonA = document.querySelector('button')

buttonA.addEventListener('click',function(){
    let fruitN = inputT.value
    let newE = document.createElement('li') // <li></li>
    newE.textContent = fruitN // <li>Papaya</li>
    ulList.appendChild(newE)
    inputT.value = ""
})