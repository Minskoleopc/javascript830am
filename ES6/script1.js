// rest operator
function addAll(...arr){
    console.log(arr)
    return arr.reduce(function(acc,el){
        return el + acc
    },0)

}
let q = addAll(1,2,3,4,5,6,7,3,4,5,6,7,8,9,5)
console.log(q)

//1,2,3,4,5,6,7,3,4,5,6,7,8,9,5 ====> [1,2,3,4,5,6,7,3,4,5,6,7,8,9,5]

// program 2 
// spread operator
//[11,22,33,44,55,66,77,88]  =======> 11,22,33,44,55,66,77,88

let numbers = [11,22,33,44,55,66,77,88,99,100]
function addFirstFive(a,b,c,d,e){
    console.log(a+b+c+d+e)
}
//addFirstFive(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4])
addFirstFive(...numbers)

// program 3

let numbersB = [11,22,33,44,55]
//[...numbers] ====> 11,22,33,44,55
console.log(numbersB)

function addFirstThree(a,b,c,...d){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}
addFirstThree(...numbersB) // 11,22,33,44,55

// program 4

let n = [11,22,33]
// let m = n 
// n[0]  = 111
// print(m) // [111,22,33]
// print(n) // [111,22,33]

let m2 = [...n] // copy ---- separate memory
m2[0] = 1111
console.log(m2)
console.log(n)













