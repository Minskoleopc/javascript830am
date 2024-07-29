let ulList = document.querySelector('ul')
let buttOne = document.querySelector('#one')
let inputT = document.querySelector('input')

console.log(ulList)
console.log(buttOne)
console.log(inputT)

buttOne.addEventListener('click',function(){
    let fruittext = inputT.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = fruittext  // <li>Apple</li>
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputT.value = ""
})


ulList.addEventListener('click',function(event){
    //console.log(event.target) element
    //console.log(event.target.tagName) // tagName
    //console.log(event.target.className)

    if(event.target.tagName === "BUTTON"){

        if(event.target.className == "remove"){
            let li = event.target.parentElement // li
            let ulList = li.parentElement  // ul
            ulList.removeChild(li) // ul X li
        }
        else if(event.target.className == "up"){
            let li = event.target.parentElement
            let ul = li.parentElement
            let prevLi  = li.previousElementSibling
            if(prevLi){
                ul.insertBefore(li,prevLi)
            }
        }

        else if(event.target.className == "down"){
           let li = event.target.parentElement
            let ul = li.parentElement
            let nextLi  = li.nextElementSibling
            if(nextLi){
                ul.insertBefore(nextLi,li)
            }  
        }

    }

})



function createButtons(li){

    // <button class="remove">Remove</button>
    // <button class="up">Up</button>
    // <button class="down">Down</button>

    let remove = document.createElement('button') // <button></button>
    remove.textContent = "Remove" // <button>Remove</button>
    remove.classList.add('remove')
    li.appendChild(remove)

    let up = document.createElement('button') 
    up.textContent = "Up" 
    up.classList.add('up')
    li.appendChild(up)

    let down = document.createElement('button') 
    down.textContent = "Down" 
    down.classList.add('down')
    li.appendChild(down)

}