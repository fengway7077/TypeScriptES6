class Person2{
    constructor(namee:any){
        this.namee = namee;
        console.log(this.namee + "contructor." )
    }
    static talk(){
        console.log("This static method is talk");
    }
    run(){
        console.log("person is running ----")
    }

}
let p =new Person2("ABCCEF");
p.run();
Person2.talk();