let ulList = document.querySelector('ul')
let inputT = document.querySelector('input')
let buttonT = document.querySelector('#one')

buttonT.addEventListener('click',function(){
    let fruitT = inputT.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent  = fruitT // <li>Papaya</li>
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputT.value = ""
})

ulList.addEventListener('click',function(event){
    // console.log(event.target)
    // console.log(event.target.tagName)
    // console.log(event.target.className)
    if(event.target.tagName == "BUTTON"){
        if(event.target.className == "remove"){
            let li = event.target.parentElement 
            let ulList = li.parentElement
            ulList.removeChild(li)
        }
        else if(event.target.className == "up"){
            let li = event.target.parentElement
            let prevLi = li.previousElementSibling
            let ulList = li.parentElement
            if(prevLi){
                ulList.insertBefore(li,prevLi)
            }
        }
        else if(event.target.className == "down"){

            let li = event.target.parentElement
            let nextLi = li.nextElementSibling
            let ulList = li.parentElement
            if(nextLi){
                ulList.insertBefore(nextLi,li)
            }

        }
    }

})




function createButtons(li){
    let r = document.createElement("button") // <button></button>
    r.textContent = "Remove" // <button>Remove</button>
    r.classList.add("remove") // <button class = "remove">Remove</button>
    li.appendChild(r)

    let u = document.createElement("button") // <button></button>
    u.textContent = "Up" // <button>Down</button>
    u.classList.add("up") // <button class = "down">Down</button>
    li.appendChild(u)

    let d = document.createElement("button") // <button></button>
    d.textContent = "Down" // <button>Down</button>
    d.classList.add("down") // <button class = "down">Down</button>
    li.appendChild(d)
}