"use strict";
//https://www.typescriptlang.org/docs/handbook/interfaces.html
var p1 = {
    fname: "TEN",
    lname: "sdfs",
    age: 2
};
var p2 = {
    fname: "TEN2",
    lname: "sdfs2"
};
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
//# sourceMappingURL=lesson27.js.map