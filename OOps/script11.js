var firstName = "ninad"
var lastName = "dani"

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     displayName:function(){

//         // this ----> chinmay
//         console.log(this.firstName + this.lastName)

//         // this -----> window
//         function displayName2(){
//             console.log(this.firstName + this.lastName)
//         }

//         displayName2()

//     }
// }
// chinmay.displayName()



// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",

//     displayName:function(){
//         // this -----> chinmay
//         console.log(this.firstName + this.lastName)

//         let  displayName2 = ()=> {
//             // this ----> parent --- chinmay
//             console.log(this.firstName + this.lastName)
//         }
//         displayName2()

//     }
// }
// chinmay.displayName()



// this -----window
// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",

//     displayName:()=>{
//         // this -- chinmay ----  window
//         console.log(this.firstName + this.lastName)

//         let  displayName2 = ()=> {
//             // this --- displayName ---- window
//             console.log(this.firstName + this.lastName)
//         }
//         displayName2()

//     }
// }
// chinmay.displayName()

// var firstName = "ninad"
// var lastName = "dani"


// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     displayName:()=>{
//         // this -------> window
//         console.log(this.firstName+ this.lastName)
//         let displayName2 =()=>{
//             // this ==== window
//             console.log(this.firstName+this.lastName)
//         }
//         displayName2()
//     }
    
// }

//amol.displayName()