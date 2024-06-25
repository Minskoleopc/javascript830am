
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// for loop and while loop

// for(intialization ; conditionCheck; increment/decrement){
//     // statement1
//     // statement2
//     // statement3
//     // statement4
//     // statement5
// }

// i++ ---> increment the value of i by 1
// i-- ---> decrement the value of i by 1

// program-2
for(let i = 1 ; i <= 3 ; i++){ //2 // 3  // 4
    console.log(i) // 1 // 2 // 3
}

// 1 <= 3 ====> true
// 2 <= 3 ====> true
// 3 <= 3 ====> true


// program 3
// print "hello"  3 times 
for(let i = 1 ; i <= 3 ; i++){ // 2 // 3 // 4
    console.log("hello") // "hello" , "hello" , "hello"
}

// program 4
// print 5 to 1
for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 // 4 // 3 // 2 // 1 
}

// program 5
// Table of 2
for(let i = 2 ; i <= 20; i = i+2){ // 4 // 6 // 8 --- 22
    console.log(i) // 2 // 4 // 6 ------- 20
}

// program 6
// table of 5 in reverse 
for(let i = 50 ; i >= 5 ; i = i -5){ // 45 //40 ---- 0
    console.log(i) // 50 // 45 ------ 5
}

// program 7
// Break statement with for loop
// break - immediately exist the loop

for(let i = 1 ; i <= 5 ; i++){ // 2 // 3
    if(i == 3){
        break
    }
    console.log(i) // 1 // 2
}

for(let i = 1 ; i <= 5 ; i++){  // 2 // 3
    console.log(i)  // 1 // 2 // 3
    if(i == 3){
        break
    }
    
}

for(let i = 5 ; i >= 1 ; i--){ // 4 // 3
    if(i == 3){
        break
    }
    console.log(i) // 5 // 4
}

// program 8
// continue statement with for loop

for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
    if(i == 3){
        continue
    }
    console.log(i) //1 // 2 // 4 //5
}






