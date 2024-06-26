
// 1989 --- age ??
// 2024 - 1989  ----> 35 

//                0     1   2    3 
let birthYear = [1989,1990,1991,1992]
// [35,34,33,32]
let ages = []

for(let i = 0 ; i < 4 ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    let age = 2024 - birthYear[i]
    //console.log(age)
    ages.push(age)
}
console.log(ages)

//                 0     1    2    3
let birthYear2 = [2000,2001,2002,2003]
let ages2 = [] // [24,23,22,21]

for(let i = 0 ; i < birthYear2.length ; i++){
    //console.log(i)
    //console.log(birthYear2[i])
    let age = 2024 - birthYear2[i]
    // console.log(age)
    ages2.push(age)
}

// program 2

//           0   1  2  3  4 5  6  7
let marks = [55,42,22,33,44,55,54,66]
//[55,42,44,55,54,66]
let above40 = [] 

for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
   // console.log(marks[i])
   if(marks[i] > 40){
        above40.push(marks[i])
   }
}
console.log(above40)

// program 3

let numbers = [11,22,33] 
let total = 0

for(let i = 0 ; i < numbers.length ; i++){
    //console.log(i)
    //console.log(numbers[i])

    total = total + numbers[i] 
            // 0  +   11 ----- //11
            // 11 +   22 ----- // 33
            // 33 +   33 ----- // 66

}
console.log(total)




