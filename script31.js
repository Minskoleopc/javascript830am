let students = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        age:34,
        skills:["sql"]
    },
    {
        firstName:"poorva",
        lastName:"vyas",
        age:29,
        skills:["javascript","django","cpp"]
    },
    {
        firstName:"amol",
        lastName:"rao",
        age:32,
        skills:["python","javascript","sql","power BI"]
    },
    {
        firstName:"amit",
        lastName:"bhure",
        age:28,
        skills:["python","jquery"]
    }

]
//console.log(students[0].firstName)
// print all firstName 


// program 1
students.forEach(function(el){
    console.log(el.firstName)
})

// chinmay:3
// print firstName:numbersof skills

// program 2
students.forEach(function(el){
    console.log(`${el.firstName}:${el.skills.length}`)
})

// program 3
// print firstName of people age < 30
students.forEach(function(el){
    if(el.age < 30){
        console.log(el.firstName)
    }
})

// program 4
// country:india

students.forEach(function(el){
    el.country = "india" 
})

console.log(students)

// program 5
// print firstName and lastName
students.forEach(function(el){
    console.log(`${el.firstName} ${el.lastName}`)
})

// print name of students with python
students.forEach(function(el){
    if(el.skills.includes("python")){
        console.log(el.firstName)
    }
})

students.forEach(function(el){
    if(el.skills.includes("python") || el.skills.includes("javascript")){
        console.log(el.firstName)
    }
})

