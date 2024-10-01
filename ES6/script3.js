
// shor circuit operator 

// falsy values  - NaN , null , undefined , 0 , 4  < 2 
// truthy values -  1 , '1' , "c" ,true , 6 > 3


// && 

let val =  6 < 2 && "chinmay"
let val2 = 0 && 'mayuri' 
let val3 = null  && 'mayuri' 
let val4 = 7  && 'ram'

console.log(val)
console.log(val2)
console.log(val3)
console.log(val4)


// || 

let val5 = 0 || 4 < 2
let val6 = 3 > 2 || 4 < 2
let val7 = ' ' || 4 < 2
console.log(val5)
console.log(val6)
console.log(val7)

// null coalescing
// 0 -----> valid value 
let q1 = 0 
let t = q1 || "samay"
console.log(t)

// if(q1 >= 0){
//     console.log("hello")
// }

//null or undefined
let t2 = ' ' ?? "chinmay"
console.log(t2)

// optional parameter

let info  = {
    firstName:"chinmay",
    lastName:"deshpande",
    parent:{
        mother:{
            firstName:"kachan",
            lastName:"deshpande"
        }
        ,
        father:"deshpande"
    }
}
// TypeError: Cannot read properties of undefined (reading 'mother')
console.log(info.parent?.mother?.lastName)




// call , bind , applu