//              0        1         2       3
let fruits = ["mango","banana","orange","chikoo"]

// Array stores the by index

// retrive 
console.log(fruits[0])

// update 
fruits[0] = "banana"
console.log(fruits)

// add
fruits.push("papaya")
console.log(fruits)

// [ 'banana', 'banana', 'orange', 'chikoo', 'papaya' ]
//delete
fruits.pop()
console.log(fruits)

// program 2
//                  0           1          2            3
let vegetables = ["brinjal","cabbage","cauliflower","ladyfinger"]
// retrive
console.log(vegetables[0]) // brinjal

// upadate
vegetables[0] = "capsicum"
console.log(vegetables)

// add
vegetables.push("onion")
console.log(vegetables)

// delete
vegetables.pop()
console.log(vegetables)

//Program 3
//              0       1         2       3
let animals = ["lion","tiger","rabbit","snake"]
console.log(animals.length)

console.log(animals[0])
console.log(animals[1])
console.log(animals[2])
console.log(animals[3])

// for - forward loop

for(let i = 0 ; i < animals.length ; i++){
    //console.log(i)
    console.log(animals[i])
}

// reverse - reverse loop
//            0       1         2      3       4
//animals = ["lion","tiger","rabbit","snake","cat"]

for(let i = animals.length - 1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(animals[i])
}

// program 4 

let numbers = [11,22,33,44,55] // 5
console.log(numbers.length)// 5
console.log(numbers.length-1)// 4
console.log(numbers[numbers.length-1])

// while loop
//    
let grades = ["A","B","C","D","E"]

let i1 = 0 
while(i1 < grades.length){
   // console.log(i1)
    console.log(grades[i1])
    i1 = i1 + 1
}






