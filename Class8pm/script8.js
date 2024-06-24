
// push() , pop() , shift() , unshift(), includes()

let birthYear = [2000,2001,2002,2003]
let ages = []

for(let i = 0 ; i < birthYear.length ; i++){
    console.log(i)
    console.log(birthYear[i])
    let age = 2024 - birthYear[i]
    ages.push(age)
}

console.log(ages)
birthYear = [2000,2001,2002,2003]
let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2024 - el
 })
 console.log(q1)
 

 // program 2
 let numbers = [22,33,44,55,66,77,88,99]
//[23,34,45,56,67,78,89,100]
let q2 = numbers.map(function(el,index,arr){
    return el + 1
})
console.log(q2)

// program 3

let marks = [60,62,44,77,33,44,56]
let above50 = []

for(let i = 0 ; i < marks.length ; i++){
    if(marks[i] > 50){
        above50.push(marks[i])
    }
}
console.log(above50)

let q3 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q3)


// program 3

let numbersC  = [11,22,33]
let total = 0

for(let i = 0 ; i < numbersC.length ; i++){
    total = total + numbersC[i]
}
console.log(total)
//fn(acc,el,index,arr)
let q4 = numbersC.reduce(function(acc,el,index,arr){
    return acc + el // acc - 66
},0)
console.log(q4)




