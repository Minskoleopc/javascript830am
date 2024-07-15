//              0      1         2        3
let names = ["apple","mango","banana","grapes"]
console.log(names)
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])

// program 2 
//                0        1         2      3        4
let fruits  =  ["apple","mango","banana","orange","papaya"]
// retrive 
console.log(fruits[0])
// update
fruits[0]  = "mango"
console.log(fruits)

// program 3
// for loop 
for(let i = 0 ; i < fruits.length ; i++){ 
    //console.log(i) 
    console.log(fruits[i])
}

for(let i = fruits.length-1 ; i >= 0 ; i-- ){
    //console.log(i)
    console.log(fruits[i])
}

//while loop
//               0      1         2       3
let cities = ["pune","mumbai",'nagpur',"chennai"]
console.log(cities)
let i1  = 0
while(i1 < 4){
    //console.log(i1) 
    console.log(cities[i1])
    i1 = i1 + 1 
}

let i2 = cities.length-1
while(i2 >= 0){
    //console.log(i2)
    console.log(cities[i2])
    i2 = i2 - 1
}

// Array ---- object 
// Properties and methods

// program 4
//                    0            1          2        3
let vegetables  = ["cabbage","cauliflower","carrot","brinjal"]
//console.log(vegetables[0])

// Human --- amol 
// Properties ---- age , color , height , weight 
// Methods --- walk() , talk()

let c1 = vegetables.length
console.log(c1)
// gym - method
// action - exercise
// return - health

// push()
//                 0      1         2       3
let country = ["india","china","srilanka","cuba"]
console.log(country.length)
country.push("pakistan")
console.log(country)

// unshift()
country.unshift("USA")
console.log(country)

// pop()
// [ 'USA', 'india', 'china', 'srilanka', 'cuba', 'pakistan' ]
country.pop()
country.shift()
console.log(country)
console.log(country)
























