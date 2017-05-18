"use strict";
//Vòng lặp for of 
var colorNames = ['RED', 'green', 'blue', 'yellow', 'puple'];
for (var index in colorNames) {
    console.log(colorNames[index]); //RED green blue yellow puple
}
console.log("----------------------");
for (var _i = 0, colorNames_1 = colorNames; _i < colorNames_1.length; _i++) {
    var item = colorNames_1[_i];
    console.log(item); //RED green blue yellow puple
}
console.log("----------------------");
var name2 = "abcj";
for (var _a = 0, name2_1 = name2; _a < name2_1.length; _a++) {
    var c_1 = name2_1[_a];
    console.log(c_1); //abcj
}
//# sourceMappingURL=lesson16.js.map