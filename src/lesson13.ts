//Bóc tách Array 
var employees = ['A','B','C'];

let [emp1,emp2,emp3] = employees;
console.log(emp1);//A
console.log(emp2);//B
console.log(emp3);//C
////
console.log("----------------");
let [em1,...em2] = employees;
console.log(em1);// A
console.log(em2);// (2) ["B", "C"] 
/////////
console.log("----------------");
let [...em3] = employees;
console.log(em3);// (3) ["A", "B", "C"]
//////////////
console.log("----------------");
let [ , ,e1] = employees;
console.log(e1);// C