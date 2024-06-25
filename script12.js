// for loop and while loop
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

//for loop and while loop
// for(intialization ; conditioCheck ; increment/decrement){
//     // statement
// }

// intialization
// while(condition){
     // statements 
     // increment / decrement
//}

// program 1
// print 1 to 3

for(let i = 1 ; i <= 3 ; i++){ // 2 //3 // 4
    console.log(i) // 1 //2 //3 
}

let i1 = 1
while(i1 <= 3){
    console.log(i1) // 1 // 2 // 3
    i1 = i1 + 1 // 2 // 3 // 4
}

// program 2
// print "hello" 3 times
for(let i = 1 ; i <= 3 ; i++){ // 2 // 3 // 4
    console.log("hello") // "hello" , "hello" , "hello"
}

let i2 = 1
while(i2 <= 3){
    console.log("hello") // "hello" "hello" , "hello"
    i2 = i2 + 1 // 2 // 3 // 4
}

// program 3
// print 5 to 1

for(let i = 5 ; i >= 1; i--){ // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 //4 // 3 // 2 //1
}

let i3 = 5
while(i3 >= 1){
    console.log(i3) // 5 // 4 // 3 // 2 //1
    i3 = i3 - 1 // 4 // 3 // 2 // 1 // 0
}

// program 4
// print table of 2 using for loop
for(let i = 2 ; i <= 20 ; i = i + 2){ // 4 // 6 --- 22
    console.log(i) // 2 // 4 // 6 ------- 20
}

let i4 = 2
while(i4 <= 20){
    console.log(i4)
    i4 = i4 + 2
}

// program 5
// break statement with for loop
for(let i = 1 ; i<= 5 ; i++){ // 2 //3
    if(i == 3){
        break
    }
    console.log(i) //1 //2
}

let i5 = 1
while(i5 <= 5){
    if(i5 == 3){
        break
    }
    console.log(i5) //1  // 2
    i5 = i5 + 1 // 2  // 3
}


// class 7 pm - for loop
// class 7:30 - while loop


