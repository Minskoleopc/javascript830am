
// intilization 

//while(condition){
// statements 
// increment / decrement
//}

// program 1

let i1 = 1
while (i1 <= 5) {
    console.log(i1) // 1 //2 // 3 // 4 // 5
    i1 = i1 + 1 //2 //3 //4 // 5 // 6
}

// program 2
// print "hello"  3 times
let i2 = 1
while (i2 <= 3) {
    console.log("hello") // "hello" "hello" "hello"
    i2 = i2 + 1 // 2 // 3 // 4
}

// program 3
// print 5 to 1

let i3 = 5
while (i3 >= 1) {
    console.log(i3) // 5 // 4 //3 //2 //1
    i3 = i3 - 1 // 4 //3 // 2 // 1 // 0
}

// program 4
// print table of 2

let i4 = 2
while (i4 <= 20) {
    console.log(i4) // 2 // 4 // 6 ------ 20
    i4 = i4 + 2 //4 // 6 // 8  ----- 22
}

let i5 = 50
while (i5 >= 5) {
    console.log(i5) // 50 // 45 // 40 ---- 5
    i5 = i5 - 5 // 45 // 40 // 35 ----- 0
}


// program 6
// break with while loop

let i6 = 1
while (i6 <= 5) {
    console.log(i6) //1 //2 //3
    if (i6 == 3) {
        break
    }
    i6 = i6 + 1 //2 //3
}


let i7 = 1
while (i7 <= 5) {
    if (i7 == 3) {
        break
    }
    console.log(i7) // 1 // 2
    i7 = i7 + 1  // 2 //3
}


for (let i = 1; i <= 5; i++) {  //2 // 3
    console.log(i)  // 1 // 2 // 3
    if (i == 3) {
        break
    }
}


for (let i = 1; i <= 5; i++) {   // 2 // 3 // 4 // 5 // 6
    if (i == 3) {
        continue
    }
    console.log(i)  // 1 // 2 // 4 // 5
}


let i9 = 1
while (i9 <= 5) {
    if (i9 == 3){
        i9 ++ // 4
        continue
    }
    console.log(i9)  // 1 // 2 // 4 // 5
    i9 = i9 + 1  // 2 // 3 // 5 // 6
}





