// for  and while loop

// for(intialization ; conditionCheck ; increment/decrement){
//         // statement
// }

// increment the value of i by 1 -> i++
// decrement the value of i by 1  -> i--

for(let i = 1; i <= 3 ; i++){ // 2 //3 // 4
    console.log(i) // 1 // 2 // 4
}

// condition 1 <= 3 ----- true
//           2 <= 3 ------ true
//           3 <= 3 ------ true
//           4 <= 3 -------false

// program 2
// print hello 3 times 
for(let i = 1 ; i <= 3 ; i++){ // 2 // 3 // 4
    console.log("hello") // "hello" , "hello" , "hello"
    console.log("bye")   // "bye"  ,   "bye" , "bye"
}

// program3
// print 1 to 5
for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
    console.log(i) // 1 // 2 // 3 // 4 // 5
}

// program 4
// print 3 to 1
for(let i = 3 ; i >= 1 ; i--){ // 2 // 1 //0
    console.log(i) // 3 // 2 //1
}

// program 5
// print 5 to 1

for(let i = 5 ; i >= 1 ;i--){ // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 // 4 // 3 // 2 // 1
}

// program 6
for(let i = 2 ; i <= 20 ; i = i + 2){ // 4 // 6 // 8 // 10 --- 22
    console.log(i) // 2 // 4 // 6 // 8 --------- 20
}

// program 7
for(let i = 50 ; i >= 5 ; i = i-5){ // 45 // 40 // 35 ----- 0
    console.log(i) // 50 // 45 // 40 -------- 5
}

// for loop -- break and continue
// while loop -- break and continue



let ne = "chandrapur"
let original = ne.split('')
let removeDuplicate = []


for(let i = 0 ; i < original.length ; i++){
    if(!removeDuplicate.includes(original[i])){
        removeDuplicate.push(original[i])
    }
    
}
console.log(removeDuplicate)
console.log(removeDuplicate.join(""))
























