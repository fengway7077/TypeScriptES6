"use strict";
//Spread parameter 
var displayColorSpread = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    for (var i_1 in colors) {
        console.log(colors[i_1]); //red greed blue
    }
};
var messageSpread = "Hello";
var colors = ['red', 'green', 'blue'];
displayColorSpread.apply(void 0, [messageSpread].concat(colors));
//# sourceMappingURL=lesson12.js.map