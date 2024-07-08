// let names = ["amol","chinmay","ram","satish"]
// // add
// names.push("nishant")
// names.unshift("nishant")
// // retrive 
// console.log(names[0])
// // update 
// names[0]= "amit"
// // delete
// names.pop()
// names.shift()
// names.splice(2,1)


// Objects 
let info  = ["chinmay","deshpande",23,89,7709192441]
let info2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    mobileNo:7709192441,
    age:23,
    rollNo:89,
    age:44
}
console.log(info2)

//Object does not stores the value by index 
//console.log(info2[0])
//Does not allow duplicate key-values 


info3  = {
    firstName:"chinmay",
    lastName:"deshpande",
    mobileNo:7709192441,
    age:23,
    rollNo:89,
    age:44
}

//retrive // . notation and bracket notation
console.log(info3.firstName)
console.log(info3['firstName'])
//update  // . notation and bracket notation
info3['firstName'] = "ninad"
info3.lastName = "dani"
console.log(info3)
//add // . notation and bracket notation
info3.city ="pune"
info3['language']= "marathi"
console.log(info3)
//delete // . notation and bracket notation
delete info3.city
delete info3['lastName']
console.log(info3)

// program 2

let vehicle = {
    color:"red",
    type:"sedane"
}
// console.log(vehicle.color)
// vehicle.color = "blue"
// vehicle.model = "QA"
// delete vehicle.type

vehicle = {
    color:"red",
    type:"sedane"
}

console.log(vehicle['color'])
vehicle['color'] = "red"
vehicle['model']  = "Q4"
delete vehicle['model']


let info33 = ["niand","dani",23,55]

for(let i = 0 ; i < info33.length ; i++){
    console.log(info33[i])
}

info4 = {
    firstName:"chinmay",
    lastName:"deshpande",
    mobileNo:7709192441,
    age:23,
    rollNo:89,
    age:44
}
// loop - bracket notation
for(let prop in info4){
    console.log(prop,info4[prop])
}

// git - 9:30 pm

















