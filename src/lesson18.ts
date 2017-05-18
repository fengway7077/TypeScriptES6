class Person2{
    constructor(name3){
        this.name3 = name3;
        console.log(this.name3 + "contructor." )
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