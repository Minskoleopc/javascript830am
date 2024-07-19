
//              0          1       2      3  
let names = ["chinmay","shirish","raj","satish"]
// retrive 
console.log(names[0])
// update 
names[0] = "tanmay"
// add 
names.push("sarika")
names.unshift("raj2")
//delete
names.pop()
names.shift()
names.splice(3,1)

// program 2

let info  = ["chinmay","deshpande",66,45]

let info2 = {
    // property:value 
    // key:value
    firstName:"chinmay",
    lastName:"deshpande",
    age:66,
    rollNo:45
}
console.log(info2)
// does object stores the value by index ??
console.log(info2[0])

// retrive  .dot notation and bracket notation
console.log(info2.firstName)
console.log(info2['firstName'])

// update   .dot notation and bracket notation 
info2['firstName'] = "tanmay"
info2.lastName = "dani"
console.log(info2)

// add .dot notation and bracket notation 
info2['language'] = "marathi"
info2.city = "pune"
console.log(info2)
// delete   .dot notation and bracket notation

delete info2.firstName
delete info2['lastName']


let names2 = ["chinmay","shirish","kanchan","gauri"]
for(let i = 0 ; i < names2.length ; i++){
    //console.log(i)
    console.log(names2[i])
}

let vehicle = {
    color:"red",
    type:"sedane"
}

for(let prop in vehicle){
    console.log(prop,vehicle[prop])
}

// sat --- 6 pm ---- topic string











