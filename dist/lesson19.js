"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person8 = (function () {
    function Person8(name8) {
        console.log(name8 + "  Person contructor");
    }
    Person8.prototype.getId = function () {
        return 10;
    };
    return Person8;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name8) {
        var _this = _super.call(this, name8) || this;
        console.log(name8 + "  Employee contructor");
        return _this;
    }
    Employee.prototype.getId = function () {
        return _super.prototype.getId.call(this);
    };
    return Employee;
}(Person8));
var emp = new Employee("ABCD"); //ABCD  Person contructor
// ABCD  Employee contructor
console.log(emp.getId()); //10
//# sourceMappingURL=lesson19.js.map