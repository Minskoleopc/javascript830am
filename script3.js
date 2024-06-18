// entity < entity ---- comparison --- boolean ---- true or false

// <, > 
// <= , >= 
// == , != --- value 
// === , !== --- value and type 

console.log(7 === 7)
console.log(7 === '7')
console.log(7 == '7')
console.log(7 != '7')
console.log(7 != 7)
console.log(7 > 3)
console.log(7 < 3)
console.log(7 >= 3)
console.log(7 <= 3)
console.log(7 >= 7)
console.log(7 <= 7)
console.log(7 != 7)

// logical operator 

// && - AND 



// true  &&   true   ---- true
// false &&   true   ----  false
// true  &&   false  ----  false
// false &&   false  ----  false

console.log(7 === 7 && 8 == 8)
console.log(6 === '6' && 7 ===7)
console.log(6 === 6 && 7 === '7')
console.log(6 != 6 && 7 != '7')


// || - OR
// true  ||   true   ----- true 
// true  ||   false  ----- true 
// false ||   true   ----- true 
// false ||   false  ----- false

console.log(8 == 8 || 8 != 9)
console.log(8 == 8 || 8 == 9)
console.log(9 === '9' || 6 == 6)
console.log(9 === '9' || 6 === '6')


// ! - NOT
// !true   ---- false
// !false  ----- true

console.log(!(8 === '8'))
console.log(!(7 === 7))










