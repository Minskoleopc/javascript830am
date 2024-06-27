// continue statement with while loop
let i1 = 1
while(i1 <= 5){
    if(i1 == 3){
        i1 ++ // 4
        continue
    }
    console.log(i1)  // 1 //2 // 4 // 5
    i1 = i1 + 1  // 2 // 3 // 5 // 6
}

// switch case 1 :-

//program1
// switch case without break statement 

let city = "Ujjain"
switch(city){
    case "pune":
        console.log("MH")
    case "jaipur":
        console.log("RJ")
    case "ujjain":
        console.log("MP")
    case "kanpur":
        console.log("UP")
    default:
        console.log("incorrect cityname")
}


//program2
//switch case with break
let city2 = "K"
switch(city2){
    case "pune":
        console.log("MH")
        break
    case "jaipur":
        console.log("RJ")
        break
    case "kanpur":
        console.log("UP")
        break
    case "indore":
        console.log("MP")
        break
    default:
        console.log("Incorrect city name")
}



// program3
// multiple case for single output

let city3 = "J"
switch(city3){
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    case "kanpur":
    case "lucknow":
        console.log("UP")
        break
    case "indore":
    case "bhopal":
        console.log("MP")
        break
    default:
        console.log("Incorrect city name")
}



// program 4
// find greatest with 3 numbers
let x1 = 10
let x2 = 50
let x3 = 200
let greatest = true

switch(greatest){
    case x1 > x2 && x1 > x3:
        console.log("x1 is greater")
        break
    case x2 > x1 && x2 > x3:
        console.log("x2 is greater")
        break
    default:
        console.log("x3 is greater")
}




// if(x1 > x2 && x1 > x3){
//     console.log("x1 is greater")
// }
// else if (x2 > x1 && x2 > x3){
//     console.log("x2 is greater")
// }
// else {
//     console.log("x3 is greater")
// }







