"use strict";
//Rest Parameter 
var displayColor = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
};
var message = "Hello";
displayColor(message, 'red');
displayColor(message, 'red', 'green');
displayColor(message, 'red', 'green', 'blue');
/** lesson11.ts:4 Hello
lesson11.ts:5 (2) ["Hello", "red"]
lesson11.ts:6 2
lesson11.ts:4 Hello
lesson11.ts:5 (3) ["Hello", "red", "green"]
lesson11.ts:6 3
lesson11.ts:4 Hello
lesson11.ts:5 (4) ["Hello", "red", "green", "blue"]
lesson11.ts:6 4 */ 
//# sourceMappingURL=lesson11.js.map