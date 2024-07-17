// map()
//                 0    1   2    3
let birthYear = [1989,1990,1991,1992]
let ages = []
// [35,34,33,32]'

for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2024 - birthYear[i])
    let ag = 2024 - birthYear[i]
    ages.push(ag)

}
console.log(ages)
//            0     1    2    3
birthYear = [1989,1990,1991,1992]
let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2024 - el
})
console.log(q1)

// program 2
// 
let marks = [100,124,60,77,53]
// [100,124,77]
let above60 = []

for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    console.log(marks[i])
    if(marks[i] > 60){
        above60.push(marks[i])
    }
}
console.log(above60)
marks = [100,124,60,77,53]
let q2 = marks.filter(function(el,index,arr){
    return el > 60
})
console.log(q2)

// program 3
//              0  1  2
let numbers = [11,22,33] // 66
let total = 0

for(let i = 0 ; i < numbers.length ; i++){
    // console.log(i)
    // console.log(numbers[i])

    total = total + numbers[i]
    //       0    +     11      ------> 11
    //       11   +     22      ------> 33
    //       33   +     33      ------> 66

}
console.log(total)
numbers = [11,22,33]

let q3 = numbers.reduce(function(acc,el,index,arr){
        return acc + el // 66
},5)
console.log(q3)

// map() -- array
// filter() -- array 
// reduce() --- single value

// forEach()
//              0         1         2         3
let cities = ["pune","banglore","kolkata","chennai"]

for(let i = 0 ; i < cities.length ; i++){
    //console.log(i)
    //console.log(cities[i])
    console.log("welcome "+ cities[i])
}

cities = ["pune","banglore","kolkata","chennai"]

 cities.forEach(function(el,index,arr){
  console.log("welcome "+ el)
})

// map() , filter() , reduce() , forEach()
// find() , findIndex() , some() , every()

// slice(), splice() , fill() , sort(), flat()

// 6:15pm

// monday --- > 8:00 pm , morning 8:30am








