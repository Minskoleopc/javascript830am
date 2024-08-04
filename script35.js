let info =  {
    firstName:"chinmay",
    lastName:"deshpande",
    1:"34"
}

// string
for(let key  in info){
    console.log(typeof key)
}

// map -
// keys - values
// keys can be any different datatype

// define empty map
let roles = new Map()
console.log(roles.size)
roles.set(1,"admin")
roles.set(2,"customer")
roles.set(3,"manager")
roles.set(4,"support")
console.log(roles)
console.log(roles.size)

// define map with values
let rolesB = new Map(
    [
        [1,"admin"],
        [2,"cutomer"],
        [3,"manager"],
        [4,"supoort"]

    ]
)
console.log(rolesB)
// methods and properties 

let mapC = new Map()
console.log(mapC)

mapC.set(1,"admin")
console.log(mapC)
mapC.set(2,"manager")
mapC.set(2,"customer")
mapC.set(4,"manager")
mapC.set(5,"tech")
mapC.set(6,"manager")
mapC.set(4,"managerB")

// get
let q1 = mapC.get(1)
console.log(q1)
console.log(mapC)

// set(2,"admin")
// get(2)
// set(2,"admin")

// program 3
console.log(mapC)
let q2 = mapC.has(2)
console.log(q2)

if(mapC.has(2)){
    console.log(mapC.get(2))
}
else {
    console.log("key not avaialble")
}
// has() , get(), set()-- to set and update value

// program 4
let skills = ["python","javascript","sql"]
let mapD = new Map([
    ["firstName","chinmay"],
    [skills,3],
    [true,"candrive"]
])
console.log(mapD)
console.log(mapD)
// mapD.clear()
console.log(mapD)

mapD.forEach(function(a,b){
    //console.log(a)
    console.log(b)
})

for(let key of mapD.keys()){
    console.log(key)
}
for(let val of mapD.values()){
    console.log(val)
}
for(let arr of mapD.entries()){
    console.log(arr)
}

mapD.delete(skills)
console.log(mapD)









