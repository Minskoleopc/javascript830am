

class Calculator{

    // same class , same method , different signature

    // addition(x,y){
    //     console.log(x+y)
    // }

    // addition(x,y,z){
    //     console.log(x+y+z)
    // }

    // addition(x,y,z,a){
    //     console.log(x+y+z+a)
    // }


    addition(x= undefined,y = undefined,z = undefined, a = undefined){
        
        if(x != undefined  && y != undefined && z != undefined && a != undefined ){
            console.log(x+y+z+a)
        }
        else if(x != undefined  && y != undefined && z != undefined){
            console.log(x+y+z)
        }
        else if(x != undefined  && y != undefined ){
            console.log(x+y)
        }
    }

}
let abc = new Calculator()
abc.addition(12,4)
abc.addition(12,4,3)
abc.addition(12,4,3,4)

