//                0         1         2       3   4
let names = ["chinmay","deshpande",7709192441,34,45]
console.log(names)
// retrive 
console.log(names[0])

// udapte 
names[0]  = "tanmay"
console.log(names)
// add 
names.push("pune")
names.unshift("Mr")
console.log(names)
// delete.

//pop()
//shift()
//splice()
names = ["chinmay","deshpande",7709192441,34,45]
names.pop()
names.shift()
names.splice(2,1)

// Array - 4 operations CRUD operation
// add , update , delete , retrive
//             0          1           2     3  4
//let info = ["chinmay","deshpande",770192441,34,56]

// Object

let info2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:23,
    mobile:7709192441
}
// Retrive (dot notation and bracket notation)
console.log(info2['firstName'])
console.log(info2.firstName)

// Update (dot notation and bracket notation)
info2['firstName'] = "ninad"
info2['lastName'] = "dani"
console.log(info2)

info2.firstName = "rahul"
info2.lastName = "singh"
console.log(info2)
 
// Add(dot notation and bracket notation)
info2.city = "pune"
info2['country'] = "india"
console.log(info2)
// Remove(dot notation and bracket notation)

delete info2['city']
delete info2.firstName
console.log(info2)



