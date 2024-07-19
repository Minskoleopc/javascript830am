let headOne = document.querySelector('h1')
let buttonC = document.querySelector('button')

console.log(headOne)
console.log(buttonC)

buttonC.addEventListener('click',function(){
    headOne.textContent = "Tanmay"
    headOne.style.color = "red"
    headOne.style.background  = "green"
})



let info = {
    fullName:"chinmay",
    parent:{
        mother:"kanchan deshpande",
        father:"shirish deshpande"
    }
}
info.parent.mother = "kanchan s deshpande"
info['parent']['mothe'] = "kanchan s deshpande"