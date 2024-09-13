// Online Java Compiler
// Use this editor to write, compile and run your Java code online

// class HelloWorld {
//     public static void main(String[] args) {
//         System.out.println("Try programiz.pro");
//         // polymorphism -- overloading 
//         // same class , same methodname , different signature
//         addition(12,3);
//         addition(12,3,3);
//         addition(12,3,3,3);
        
//     }
    
//     public static void addition(int x , int y){
//           System.out.println(x+y);  
//     }
//     public static void addition(int x , int y ,int z){
//           System.out.println(x+y+z);  
//     }
//     public static void addition(int x , int y ,int z , int a){
//           System.out.println(x+y+z+a);  
//     }
    

// }


// class Calculator {
    // addition(x,y){
    //     console.log(x+y)
    // }
    // addition(x,y,z){
    //     console.log(x+y+z)
    // }
    // addition(x,y,z,a){
    //     console.log(x+y+z+a)
    // }

//     addition(x=undefined,y=undefined,z=undefined,a=undefined){

//         if(x != undefined && y != undefined && z != undefined && a != undefined ){
//             console.log(x+y+z+a)
//         }
        
//         else if(x != undefined && y != undefined && z != undefined ){
//             console.log(x+y+z)
//         }
        
//         else if(x != undefined && y != undefined){
//             console.log(x+y)
//         }

//     }

// }

// let a = new Calculator()
// a.addition(12,3)
// a.addition(12,3,3)
// a.addition(12,3,3,3)

// program 2
// Different class , same method name and same signature
// class WorldBank {
//     save(){
//         console.log("save - worldBank")
//     }
//     loan(){
//         console.log("loan - worldbank")
//     }
// }
// class SBI extends WorldBank {
//     save(){
//         console.log("save -SBI 10%")
//     }
//     loan(){
//         console.log("loan -SBI 10%")
//     }

// }
// let sbiNagpur = new SBI()
// sbiNagpur.loan()
// sbiNagpur.save()


// program 3

// class Human {
//     talk(){
//         console.log("hello hi")
//     }
// }
// class Duck {
//     talk(){
//         console.log('quack quack')
//     }
// }

// class Dog {
//     bark(){
//         console.log("bow bow")
//     }
// }

// function call_talk(obj){
//     obj.talk()
// }
// aa = new Human()
// bb = new Duck()
// cc = new Dog()

// call_talk(aa)
// call_talk(bb)
// call_talk(cc)





























