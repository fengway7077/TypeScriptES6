"use strict";
//constructor 
var Person = (function () {
    function Person(fname, lname) {
        this.fname = lname;
        this.lname = lname;
    }
    return Person;
}());
var Person1 = (function () {
    function Person1(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    return Person1;
}());
var p = new Person1("ABCDEF", "OHHH");
console.log(p.fname + "  " + p.lname); //ABCDEF OHHH
//# sourceMappingURL=lesson26.js.map