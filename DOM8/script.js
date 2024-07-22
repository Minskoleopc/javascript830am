    //    <h1>Chinmay</h1>
    
    let headOne = document.querySelector('h1')
    let buttonOne = document.querySelector('button')

    buttonOne.addEventListener('click',function(){
        headOne.style.color = "green"
        headOne.style.background = "red"
        headOne.textContent = headOne.textContent.toUpperCase()
    })

    