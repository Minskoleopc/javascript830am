// // let info = {
// //     firstName:"chinmay",
// //     lastName:"deshpande",
// //     age:23,
// //     rollNo:34
// // }
// // for(let key in info){
// //     console.log(typeof key)
// // }

// // // program 1
// // let mapA = new Map()
// // console.log(mapA)

// // let mapB = new Map([
// //     [1,"admin"],
// //     [2,"customer"],
// //     [3,"support"],
// //     [4,"manager"]
// // ])
// // console.log(mapB.size)
// // console.log(mapA.size)


// let skills = ["python", "html", "css", "javascript"]
// let parent = { father: "shirish", mother: "kanchan" }

// let mapC = new Map([
//     [1, "chinmay deshpande"],
//     [skills, skills.length],
//     [parent, "familyinfo"],
//     [true, "candrive"]
// ]
// )

// // console.log(mapC)

// // mapC.set(3,"manager")
// // console.log(mapC.get(true))
// // console.log(mapC.has(parent))
// // mapC.delete(1)
// // console.log(mapC)
// // mapC.clear()
// // console.log(mapC)
// // console.log(mapC.size)


// mapC.forEach(function(a,b){
//     console.log(a,b)
// })

// for(let key of mapC.keys()){
//     console.log(key)
// }

// for(let val of mapC.values()){
//     console.log(val)
// }

// for(let arr of mapC.entries()){
//     console.log(arr)
// }

let setA = new Set([11,22,33,33])
// console.log(setA)
// console.log(typeof setA)

// let n = [11,22,33]
// console.log(typeof n)

// let mapD = new Map()
// console.log(typeof mapD)


let setB = new Set()
setB.add(22)
setB.add(33)
setB.add(44)
setB.add(55)
console.log(setB.size)

console.log(setB.has(55))

// setB.clear()
// console.log(setB)

setB.delete(33)
console.log(setB)

setB.forEach(function(el){
    console.log(el)
})

console.log(setB.entries())
console.log(setB.keys())
console.log(setB.values())
