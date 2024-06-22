// program 1
//                0    1    2     3
let birthYear = [1989,1990,1991,1992]
let ages = []
// [35,34,33,32,31]

for(let i = 0 ; i < birthYear.length; i++){
   // console.log(i)
    //console.log(2024 - birthYear[i])
    let age = 2024 - birthYear[i]
    ages.push(age)
}
console.log(ages)

// program 2
//           0   1  2  3  4
let marks = [11,55,66,33,44]
let above40 = [] // [55]
// [55,66,44]
for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])
    if(marks[i] > 40){
        above40.push(marks[i])
    }
}
console.log(above40)

// program 3
//              0  1  2
let numbers = [11,22,33] // 66
let total = 0

for(let i = 0 ; i < numbers.length ; i++){
    //console.log(i)
    //console.log(numbers[i])
    total = total + numbers[i]
    //       0    +    11  ---- 11
   //       11    +    22  ---- 33
   //       33    +    33  --- 66

}
console.log(total)

// program 4
//            0          1      2       3
let city = ["nagpur","mumbai","pune","hydrebad"]

for(let i = 0 ; i < city.length  ; i++){
    //console.log(i)
    //console.log(city[i])
    console.log("welcome "+city[i])
}











// program 3



// program 4