
// async   vs  sync 
// function addA(){
//     console.log("A  is called")
// }

// function addB(){
//     console.log("B is called")
// }
// addB()
// addA()

// program 2

// function addC(){
//     setTimeout(function(){
//         console.log("C is called")
//     },3000)
// }
// function addD(){
//     console.log("D is called")
// }

// addC()
// addD()

// program 3

// function getInfo(){

//     setTimeout(function(){
//         console.log("user created")
//     },3000)

    
//     setTimeout(function(){
//         console.log("get id")
//     },2000)

    
//     setTimeout(function(){
//         console.log("get info")  
//     },1000)

// }
// getInfo()


// program 4


// function getInfo(){
//     setTimeout(function(){
//         console.log("user created"),
//         setTimeout(function(){
//             console.log("get id")
//             setTimeout(function(){
//                 console.log("get info")  
//             },1000)
        
//         },2000)
//     },3000)   
// }
// getInfo()

// program 5 promises

// pending
// resolve
// reject 


let pro = new Promise(function(resolve,reject){
    let  a = 10 
    let  b =  5
    
    if(a == b){
        resolve("a  is called")
    }
    else {
        reject("b is called")
    }
})
// consuming the promise
// 1st
// pro
// .then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })


// 2nd
// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// 3rd 

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always called")
// })

//4th

pro.
then(function(str){
    console.log(str)
    return [11,22,33]
})
.then(function(arr){
    console.log(str[0])
})




