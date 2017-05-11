"use strict";
//Bóc tách Array 
var employees = ['A', 'B', 'C'];
var emp1 = employees[0], emp2 = employees[1], emp3 = employees[2];
console.log(emp1); //A
console.log(emp2); //B
console.log(emp3); //C
////
console.log("----------------");
var em1 = employees[0], em2 = employees.slice(1);
console.log(em1); // A
console.log(em2); // (2) ["B", "C"] 
/////////
console.log("----------------");
var em3 = employees.slice(0);
console.log(em3); // (3) ["A", "B", "C"]
//////////////
console.log("----------------");
var e1 = employees[2];
console.log(e1); // C
//# sourceMappingURL=lesson13.js.map