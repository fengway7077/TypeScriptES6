"use strict";
var Person2 = (function () {
    function Person2(namee) {
        this.namee = namee;
        console.log(this.namee + "contructor.");
    }
    Person2.talk = function () {
        console.log("This static method is talk");
    };
    Person2.prototype.run = function () {
        console.log("person is running ----");
    };
    return Person2;
}());
var p = new Person2("ABCCEF");
p.run();
Person2.talk();
//# sourceMappingURL=lesson18.js.map