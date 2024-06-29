let a = 10
console.log(a)

// array
//              0          1        2      3     4
let names = ["chinmay","sarika","poorva","ram","sham"]
console.log(names[0])
console.log(names[1])
console.log(names[2])

// Human --- amol
// Properties - color , gender , height , weight 
// Methods - walk(),talk()
// Array ----- Objects  ----- properties and methods

let e = names.length
console.log(e)

// program 2
//              0        1       2        3
let fruits = ["apple","mango","banana","orange"]
console.log(fruits.length)
console.log(fruits.length-1)

for(let i = 0 ; i < 4 ; i++){
    //console.log(i) // 0,1,2,3
    console.log(fruits[i])
}

for(let i = 3; i >= 0 ; i--){
    //console.log(i)
    console.log(fruits[i])
}

// program 2
//                  0           1         2
let vegetables = ["brinjal","cabbage","cauliflower"]

for(let i = 0 ; i < vegetables.length ; i++){
    //console.log(i)
    console.log(vegetables[i])

}

for(let i = vegetables.length -1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(vegetables[i])

}

// while loop
//               0          1       2      3
let country = ["india","srilanka","cuba","china"]

let i1 = 0
while(i1 <  country.length){
    //console.log(i1)
    console.log(country[i1])
    i1 = i1 + 1
}

let i2 = country.length -1
while(i2 >= 0){
    //console.log(i2)
    console.log(country[i2])
    i2 = i2 - 1
}







