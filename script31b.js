let students = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        age:34,
        skills:["python","javascript"],
        city:"pune"
    },
    {
        firstName:"amol",
        lastName:"rao",
        age:33,
        skills:["python","sql","power BI"],
        city:"pune"

    },
    {
        firstName:"sarika",
        lastName:"pansare",
        age:31,
        skills:["cypress","playwright","selenium"],
        city:"ujjain"

    },
    {
        firstName:"bharat",
        lastName:"rao",
        age:33,
        skills:["cypress","playwright","selenium","sql"],
        city:"nagpur"

    }

]

console.log(students[0])
console.log(students[0].firstName)
console.log(students[0]['firstName'])

// program2
students.forEach(function(el){
    console.log(el.firstName)
})

// program 3
// print all firstName and lastName 
students.forEach(function(el){
    console.log(`${el.firstName} ${el.lastName}`)
})

// program 4
// chinmay:numbersOfSkills
students.forEach(function(el){
    console.log(`${el.firstName}:${el.skills.length}`)
})
// program 5
students.forEach(function(el){
    if(el.city == "pune"){
        console.log(el.firstName)
    }
})

// program 6 
// name of people with python skills 

students.forEach(function(el){
    if(el.skills.includes("python")){
        console.log(el.firstName)
    }
})
// name of people with python and sql skill
students.forEach(function(el){
    if(el.skills.includes("python") || el.skills.includes("sql")){
        console.log(el.firstName)
    }
})

//name of people age > 30 and with python skill 
students.forEach(function(el){
    if(el.age > 30 && el.skills.includes("python")){
        console.log(el.firstName)
    }
})

//add country = "India" for every object 
students.forEach(function(el){
    el.country = "india"
})
console.log(students)

// add html skill to every user

students.forEach(function(el){
    el.skills.push("html")
})
console.log(students)













