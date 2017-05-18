"use strict";
//Khai báo class 
var Person = (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        console.log("Person run");
    };
    return Person;
}());
var p1 = new Person();
//console.log(typeof Person);
console.log(p1.run === Person.prototype.run);
//console.log(p1.run()); 
//# sourceMappingURL=lesson17.js.map