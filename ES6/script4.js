// bind() , call() , apply()

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }

}
info.displayName()

let info2 = {
    firstName:"mayuri",
    lastName:"rao"
}

let info3 = {
    firstName:"amol",
    lastName:"rao"
}

let info4 = {
    firstName:"mayuri",
    lastName:"katwe"
}



//let display = info.displayName


let display = function(){
    console.log(this.firstName + this.lastName)
}
// display = display.bind(info2)
// display()

// let display = function(){
//     console.log(info2.firstName + info2.lastName)
// }

// display = display.bind(info3)
// display()

// bind() , call() , apply()
// bind return a function


info2 = {
    firstName:"mayuri",
    lastName:"rao"
}

info3 = {
    firstName:"amol",
    lastName:"rao"
}

info4 = {
    firstName:"mayuri",
    lastName:"katwe"
}

let displayFirstName= function(word){
    console.log(word +" "+this.firstName)
}
// displayFirstName()
// let fn = displayFirstName.bind(info2)
// fn()


displayFirstName.call(info2,"good morning ..")
displayFirstName.call(info3,"good evening ....")
displayFirstName.call(info4,"good afternoon")
displayFirstName.apply(info2,["good morning"])









