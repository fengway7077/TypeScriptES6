//constructor 

class Person{
    public fname:string;
    public lname:string;
    constructor(fname:string,lname: string){
        this.fname =lname;
        this.lname = lname;   
  } 
}

class Person1{
    constructor(public fname:string ,public lname:string){

    }
}
let p = new Person1("ABCDEF","OHHH");
console.log(p.fname + "  " + p.lname); //ABCDEF OHHH
