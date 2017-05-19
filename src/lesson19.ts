
class Person8{
    constructor(name8:any){
        console.log(name8  + "  Person contructor");
    }
    getId(){
        return 10;
    }
}

    class Employee extends Person8{
         constructor(name8:any){
           super(name8);
           console.log(name8 + "  Employee contructor")
        }
        getId(){
           return super.getId();
        }

    }

var emp = new Employee("ABCD");//ABCD  Person contructor
                               // ABCD  Employee contructor
console.log(emp.getId());//10