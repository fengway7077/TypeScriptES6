//Khai báo class 
class Person{
 run(){
   console.log("Person run")
 }
}
let p1 = new Person();

//console.log(typeof Person);
console.log(p1.run === Person.prototype.run);
//console.log(p1.run());